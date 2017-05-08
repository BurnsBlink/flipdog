class PostSerializer < ActiveModel::Serializer
  attributes :id, :dog_name, :description, :image_url, :vote_count
  belongs_to :user
end
