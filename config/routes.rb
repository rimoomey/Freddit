Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create]
  resources :users do
    resources :posts, only: [:index, :create, :destroy, :update]
  end
  resources :posts, only: [:index, :show]
  resources :posts do
    resources :comments
  end
  resources :topics, only: [:index, :show]
  resources :comments, only: [:index]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "posts#index"
end
