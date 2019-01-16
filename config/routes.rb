Rails.application.routes.draw do

  post 'rides/create', to: "rides#create"
  
  get '/people/current', to: 'people#current'
  get '/people/', to: 'people#show'
  get '/trips/', to: 'trips#show'

  post '/trips/search', to: 'trips#search'
  post '/trips/create', to: 'trips#create' 

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  if Rails.env.production?
    CLIENT_HTML = File.read(Rails.root.join('public/index.html'))

    get "*path", to: proc { [200, {}, [CLIENT_HTML]] }
  end
end
