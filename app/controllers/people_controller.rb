class PeopleController < ApplicationController

  def current
    person = current_person

    render json:
      {
        id: person.id,
        first_name: person.first_name,
        last_name: person.last_name,
        age: person.age,
        bio: person.bio,
        email: person.email,
        avatar_url: person.avatar_url,
        drives: person.trips.map(&:api_json),
        rides: person.trips_as_rider.map(&:api_json),
      }     
  end

  def show
    @people = Person.all

    render json: @people
  end

end
