FactoryGirl.define do
  factory :user do
    email {"peter12345@gmail.com"}
    first_name {"Monkey"}
    last_name {"King"}
    password {"123456"}
  end
end
