Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users do
      collection do
        get "email_exists"
      end
    end
    resource :session, only: [:create, :destroy, :show]
    resources :events
    resources :categories, only: [:create, :show, :index]
    resources :event_types, only: [:create, :show, :index]
    resources :event_event_types, only: [:create, :show, :index, :update]
    resources :event_categories, only: [:create, :show, :index, :update]
    resources :tickets, only: [:create, :index, :show]
    resources :saved_events, only: [:create, :index, :show, :destroy]
  end
end
