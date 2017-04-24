Rails.application.routes.draw do
  resources :posts

  root 'posts#index'

  get '/auth/:provider/callback' => 'sessions#create'
  delete '/signout' => 'sessions#destroy', :as => :signout
  post '/signin' => 'sessions#new', :as => :signin
end
