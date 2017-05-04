class PostsController < ApplicationController
  def index
    @post = Post.all.sample
  end

  def create
  end
end
