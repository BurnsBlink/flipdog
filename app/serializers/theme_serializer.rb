class ThemeSerializer < ActiveModel::Serializer
  attributes :theme
  has_many :posts
end
