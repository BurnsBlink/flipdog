class Api::V1::PostsController < ApiController
  def index
    post = Post.all.sample
    render json: post
  end
end
