class PostSerializer < ActiveModel::Serializer
  attributes :id, :dog_name, :description, :image_url
  belongs_to :user
end
