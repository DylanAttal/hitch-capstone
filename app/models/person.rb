require 'net/http'
class Person < ApplicationRecord
  # Where I am a driver
  has_many :trips
  has_many :rides
  
  # Trips where I am a rider
  has_many :trips_as_rider, through: :rides, class_name: "Trip", source: :person
  
  # current_person.rides.create(trip_id: )
  
  def self.from_auth_hash(payload)
    Person.find_or_create_by(auth_sub: payload["sub"]) do |person|
      # This code is called whenever we create a Person for the first time.

      # This code stores their name
      person.first_name = payload["given_name"]
      person.last_name = payload["family_name"]

      # This code stores their email address
      person.email = payload["email"]

      # This code saves a person's avatar as a URL
      person.avatar_url = payload["picture"]
  
      # This code would attach an ActiveStorage profile image by downloading the person's profile and storing it locally
      # person.profile_image.attach(io: StringIO.new(Net::HTTP.get(URI.parse(payload["picture"]))), filename: "profile.png")
    end
  end
end
