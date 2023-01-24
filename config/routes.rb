Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :users, only: [:index, :show] do
    resources :posts, only: [:index]
  end
  resources :posts, only: [:index, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "posts#index"
end
