Rails.application.routes.draw do
  get 'home/index'
  get '/auth/:provider/callback' => 'sessions#create'
  get '/signin' => 'sessions#new', :as => :signin
  delete '/signout' => 'sessions#destroy', :as => :signout

  resources :posts

  root 'home#index'

end
