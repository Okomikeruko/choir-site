# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'static_pages#home'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  resources :music,
            controller: 'songs',
            only: %i[index show],
            param: :slug
  resources :news,
            controller: 'articles',
            only: %i[index show]
  resources :rehearsals,
            only: [:index]
  get  'contact', to: 'messages#new'
  post 'contact', to: 'messages#create'
  get 'about-us', to: 'static_pages#about_us'

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
    resources :categories, except: %i[new edit show]
    resources :tags, except: %i[new edit show]
    resources :messages, only: %i[index show] do
      post :do_to_all, on: :collection
    end
  end
end
