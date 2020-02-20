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
    resources :articles, except: [:show]
    resources :members, except: [:show]
    resources :performances, except: [:show]
    resources :profiles, except: [:show] do
      put :sort, on: :collection
    end
    resources :rehearsals, except: [:show]
    resources :songs, except: [:show]
    resources :categories, except: [:new, :edit, :show]
    resources :tags, except: [:new, :edit, :show]
    resources :messages, only: [:index, :show] do
      post :do_to_all, on: :collection
    end
#    post "messages/do_to_all"
  end
end