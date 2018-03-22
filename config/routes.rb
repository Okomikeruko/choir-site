Rails.application.routes.draw do
  root to: 'songs#index'

  devise_for :users
  
  resources :music, 
            controller: "songs", 
            only: [:index, :show],
            param: :slug
  
  get "about-us", to: "static_pages#about_us"
  
  resources :admin, only: [:index]
  namespace :admin do 
    resources :songs
  end
end
