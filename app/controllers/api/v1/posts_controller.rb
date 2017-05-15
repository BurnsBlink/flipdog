class Api::V1::PostsController < ApiController
  def create
    body = request.body.read
    parsed = JSON.parse(body)
    post = Post.new(parsed)
    if post.save
      render json: { message: 'Success!' }
    else
      render json: { message: post.errors.full_messages }
    end
  end

  def index
    # resets the theme and posts every 3 days
    theme = Theme.pluck(:theme).cycle
    theme_id = Theme.pluck(:id).cycle
    start_time = DateTime.new(2017, 5, 11, 00, 00).change(offset: "+0400")
    end_time = DateTime.new(2018, 5, 11, 00, 00).change(offset: "+0400")

    start_time.step(end_time, 3) do |date|
      if (date..date + 3).cover?(DateTime.now)
        theme.next
        theme_id = theme_id.next
        break
      else
        theme.next
        theme_id.next
      end
    end

    post = Post.where(theme_id: theme_id).sample
    render json: post
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end

  def update
    post = Post.find(params[:id])
    user_id = request.body.read
    user = User.find(user_id)
    if Uservote.find_by(post: post, user: user).nil?
      voted = Uservote.create(post: post, user: user, voted: false)
      voted.voted = voted.voted = true
      post.vote_count = post.vote_count + 1
      post.save
      render json: { message: 'Success!' }
    else
      render json: { message: "Already Voted!" }
    end
  end

  private

  def site_params
    params.permit(:id, :dog_name, :user_id, :image_url, :description)
  end
end
