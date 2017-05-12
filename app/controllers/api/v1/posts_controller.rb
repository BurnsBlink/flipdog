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
    start_time = DateTime.new(2017, 5, 9, 00, 00)
    end_time = DateTime.new(2018, 5, 9, 00, 00)

    start_time.step(end_time, 3) do |date|
      if (date..date + 3).cover?(DateTime.now)
        current_theme = theme.next
        theme_id = theme_id.next
      else
        theme.next
        theme_id.next
      end
    end

    post = Post.where(theme_id: theme_id).sample
    render json: post
  end
end
