# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Person.create!(first_name: "Dylan",
              last_name: "Attal",
              age: 26,
              bio:"I'm a full stack web developer living in Tampa, Florida. I'm passionate about writing clean code and working on diverse teams. In my spare time I enjoy cooking with my new air-fryer, brewing freshly-ground Kona coffee in my French press, and swimming in Florida's natural springs.",
              email: "dylansampleemail@gmail.com")

Trip.create!(departure_location_address: "2220 Central Avenue, St. Petersburg, FL, 33712",
            departure_location_latitude: 27.7708,
            departure_location_longitude: -82.6635,
            arrival_location_address: "737 Reitz Union Drive, Gainesville, FL, 32611",
            arrival_location_latitude: 29.6454,
            arrival_location_longitude: -82.3480,
            departure_date: '2019-01-10', 
            departure_time: '08:00 AM', 
            arrival_date: '2019-01-10',
            arrival_time: '10:30 AM',
            rating: 5,
            number_of_seats_available: 4,
            price_per_seat: 30,
            trip_description: "Departing 2220 Central Avenue, St. Petersburg, FL, 33712 at 8AM on January 10th and arriving at 737 Reitz Union Drive, Gainesville, FL, 32611 at 10:30AM on January 10th.",
            person_id: 1)
