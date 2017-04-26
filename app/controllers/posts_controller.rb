class PostsController < ApplicationController
  def create

  end

  def index
    @post = Post.all.sample
  end
end
