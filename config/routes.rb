Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create]
  resources :users do
    resources :posts, only: [:index, :create, :destroy]
  end
  resources :posts, only: [:index, :show]
  resources :topics, only: [:index, :show]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "posts#index"
end
