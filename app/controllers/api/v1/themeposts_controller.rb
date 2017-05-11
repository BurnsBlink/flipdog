class Api::V1::ThemepostsController < ApiController
  def index
    post = Post.all.order(:vote_count).last(3)
    render json: post
  end
end
