Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :show, :update] do 
      resources :reviews, only: :index
      resources :photos, only: :index
    end

    resources :parks, only: :show

    resources :hikes, only: :show do 
      resources :photos, only: :index
    end
    
    resources :reviews, only: [:create, :update, :destroy]

    resources :photos, only: :create

    resources :searches, only: :index
  end

end
