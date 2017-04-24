class Post < ApplicationRecord
  validates_presence_of :dog_name, :image_url
end
