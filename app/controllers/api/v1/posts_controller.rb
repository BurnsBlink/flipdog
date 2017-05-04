class Api::V1::PostsController < ApiController
  def index
    post = Post.all.sample
    render json: post
  end

  def create
    binding.pry
    body = request.body.read
    parsed = JSON.parse(body)
    post = Post.new(parsed)
    if post.save
      render json: { message: 'Success!' }
    else
      render json: { message: post.errors.full_messages }
    end
  end
end
