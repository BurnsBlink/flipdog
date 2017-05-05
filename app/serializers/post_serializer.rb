class PostSerializer < ActiveModel::Serializer
  attributes :id, :dog_name, :description, :image_url, :user
  belongs_to :user
end
