Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  resources :posts
  root 'posts#index'

  resources :users, only: [:show, :edit, :update, :destroy]
  resources :themes, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show, :create]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show, :create]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :themes, only: [:index, :show]
    end
  end
end
