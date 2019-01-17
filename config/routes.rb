Rails.application.routes.draw do

  get '/people/current/', to: 'people#current'
  get '/people/', to: 'people#show'
  get '/people/:id/', to: 'people#person_by_id'
  get '/trips/', to: 'trips#show'
  get '/rides/', to: 'rides#show'
  get '/new_drive/', to: 'trips#new_drive'

  post '/trips/search/', to: 'trips#search'
  post '/trips/create/', to: 'trips#create' 
  post '/rides/create/', to: 'rides#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
