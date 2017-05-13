FactoryGirl.define do
  factory :post do
    theme
    user
    dog_name "Champ"
    description "He looks so good in his costume"
    image_url "https://www.rover.com/blog/wp-content/uploads/2014/09/fireman-dog-costume.jpg"
  end
end
