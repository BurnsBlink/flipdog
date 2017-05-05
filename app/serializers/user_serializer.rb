class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :posts

  def posts
    post = PostSerializer.new(object.post)
  end
end
