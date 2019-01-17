require 'geocoder/sql'

class Trip < ApplicationRecord
  # Who is driving on this trip
  belongs_to :person

  # Who is riding on this trip
  has_many :riders, through: :rides, class_name: "Person", source: :trip

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

  # Reverse geocode all the things
  after_validation :reverse_geocode_trip

  # Take the depature and arrival locations and look them up
  def reverse_geocode_trip
    self.departure_location_address ||= Geocoder.search([departure_location_latitude, departure_location_longitude]).first.address
    self.arrival_location_address   ||= Geocoder.search([arrival_location_latitude, arrival_location_longitude]).first.address
  end

    # do |obj, results|
  #   if geo = results.first
  #     obj.street  = geo.address.split(',')[0]
  #     obj.city = geo.city
  #     obj.state = geo.state
  #     obj.zip = geo.postal_code
  #   end
  # end

  # def address
  #   self.street + self.city + self.state + self.postal_code
  # end

  def api_json
    {
      id: id,
      departure_location_latitude: departure_location_latitude,
      departure_location_longitude: departure_location_longitude,
      departure_location_address: departure_location_address,
      arrival_location_latitude: arrival_location_latitude,
      arrival_location_longitude: arrival_location_longitude,
      arrival_location_address: arrival_location_address,
      depart_at: depart_at,
      arrive_at: arrive_at,
      rating: rating,
      number_of_seats_available: number_of_seats_available,
      price_per_seat: price_per_seat,
      trip_description: trip_description,
      driver_name: person_id,
      driver_first_name: person.first_name,
      driver_last_name: person.last_name,
      driver_avatar_url: person.avatar_url
    }
  end
end