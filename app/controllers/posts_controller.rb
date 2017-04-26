class PostsController < ApplicationController
  def index
    @post = Post.all.sample
  end
end
