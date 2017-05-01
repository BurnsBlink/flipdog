class Api::V1::PostsController < ApiController
  def index
    post = Post.all.sample
    user = post.user.first_name
    render json: post
  end
end
