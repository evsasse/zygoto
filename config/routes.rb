Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  mount PgHero::Engine, at: "pghero"

  resources :example, only: [] do
    collection do
      get :js
    end
  end
end
