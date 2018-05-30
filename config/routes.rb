Rails.application.routes.draw do

  root to: 'static_pages#home'

  devise_for :users, controllers: {
    sessions: "users/sessions"
  }
  
  resources :music, 
            controller: "songs", 
            only: [:index, :show],
            param: :slug
  
  resources :news,
            controller: "articles",
            only: [:index, :show]
  
  resources :rehearsals,
            only: [:index]
  
  get  "contact", to: "messages#new"
  post "contact", to: "messages#create"
  
  get "about-us", to: "static_pages#about_us"
  
  resources :admin, only: [:index]
  namespace :admin do 
    with_options except: [:show] do 
      resources :articles
      resources :members
      resources :performances
      resources :profiles do
        put :sort, on: :collection
      end
      resources :rehearsals
      resources :songs
      with_options except: [:new, :edit] do 
        resources :categories
        resources :tags
      end
    end
    resources :messages, only: [:index, :show] do
      post :do_to_all, on: :collection
    end
#    post "messages/do_to_all"
  end
end
