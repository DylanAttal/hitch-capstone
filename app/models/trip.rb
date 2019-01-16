require 'geocoder/sql'

class Trip < ApplicationRecord
  belongs_to :person

  # https://guides.rubyonrails.org/active_record_querying.html#scopes

  scope :near_departure, -> (latitude, longitude, radius) {
    # Use geocoder to make a query based on the distance to departure location
    distance_sql = Geocoder::Sql.full_distance(latitude, longitude, 'departure_location_latitude', 'departure_location_longitude') 
    where("#{distance_sql} < ?", radius)
  }

  scope :near_arrival, -> (latitude, longitude, radius) {
    # Use geocoder to make a query based on the distance to arrival location
    distance_sql = Geocoder::Sql.full_distance(latitude, longitude, 'arrival_location_latitude', 'arrival_location_longitude') 
    where("#{distance_sql} < ?", radius)
  }
end