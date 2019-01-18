class PeopleController < ApplicationController

  def person_by_id
    @person = Person.find(params[:id])

    render json: @person
  end

  def update
    new_age = params[:person][:age]
    new_bio = params[:person][:bio]
    person = current_person
    current_person.age = new_age
    current_person.bio = new_bio

    current_person.save

    render json:
    {
      id: person.id,
      first_name: person.first_name,
      last_name: person.last_name,
      age: new_age,
      bio: new_bio,
      email: person.email,
      avatar_url: person.avatar_url,
      drives: person.trips.map(&:api_json),
      rides: person.trips_as_rider.map(&:api_json)
    }
  end

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
        rides: person.trips_as_rider.map(&:api_json)
      }     
  end

  def show
    @people = Person.all

    render json: @people
  end

end
