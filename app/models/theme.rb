class Theme < ApplicationRecord
  validates_presence_of :theme
  has_many :posts
end
