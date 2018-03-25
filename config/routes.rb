Rails.application.routes.draw do

  root to: 'static_pages#home'

  devise_for :users, controllers: {
    sessions: "users/sessions"
  }
  
  resources :music, 
            controller: "songs", 
            only: [:index, :show],
            param: :slug
  
  get "about-us", to: "static_pages#about_us"
  
  resources :admin, only: [:index]
  namespace :admin do 
    with_options except: [:show] do 
      resources :performances
      resources :profiles do
        put :sort, on: :collection
      end
      resources :songs
    end
  end
end
