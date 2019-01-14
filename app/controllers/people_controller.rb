class PeopleController < ApplicationController
  def show
    @people = Person.all

    render json: @people.map { |person|
      {
        id: person.id,
        first_name: person.first_name,
        last_name: person.last_name,
        age: person.age,
        bio: person.bio,
        email: person.email
      }     
    }
  end
end
