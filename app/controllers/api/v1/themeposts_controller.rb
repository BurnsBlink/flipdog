class Api::V1::ThemepostsController < ApiController
  def index
    post = Post.all.order(:theme_id).last(3)
    render json: post
  end
end
