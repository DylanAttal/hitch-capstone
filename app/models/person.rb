class Person < ApplicationRecord
  has_many :rides, dependent: :destroy

  # Where I am a driver
  has_many :trips, dependent: :destroy
  
  # Trips where I am a rider
  has_many :trips_as_rider, through: :rides, class_name: "Trip", source: :trip
  
  def self.from_auth_hash(payload)
    Person.find_or_create_by(auth_sub: payload["sub"]) do |person|
      # This code is called whenever a Person is created for the first time.

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
