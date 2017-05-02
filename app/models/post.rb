class Post < ApplicationRecord
  validates_presence_of :dog_name, :image_url, :user

  belongs_to :user
end
