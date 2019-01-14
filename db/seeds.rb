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
  
Person.create!(first_name: "Samantha",
              last_name: "Keene",
              age: 22,
              bio:"I'm a junior web developer working in St. Petersburg, Florida at a small marketing agency specializing in bringing customer metrics and other data analysis to small to medium-sized businesses in the Southeast United States. In my free time I enjoy scuba diving in the Florida Keys, baking cookies, and attending NASCAR events. I am an outgoing person--always looking to meet new people and make new friends!",
              email: "samanthakeene@gmail.com")

Person.create!(first_name: "Chris",
              last_name: "Northfolk",
              age: 24,
              bio:"Hey, everyone, I'm Chris, and I'm a regional sales executive working for an alarm installation company in Ocala, Florida. My spare time is totally devoted to my stallion and best friend, Boris. I compete in Dressage about four times a year, and placed second in the regional quarter-finals in 2018.",
              email: "northfolk46@gmail.com")

Trip.create!(departure_location_address: "2220 Central Avenue, St. Petersburg, FL, 33712",
            departure_location_latitude: 27.7708,
            departure_location_longitude: -82.6635,
            arrival_location_address: "737 Reitz Union Drive, Gainesville, FL, 32611",
            arrival_location_latitude: 29.6454,
            arrival_location_longitude: -82.3480,
            departure_date: '2019-01-29', 
            departure_time: '08:00 AM', 
            arrival_date: '2019-01-29',
            arrival_time: '10:30 AM',
            rating: 5,
            number_of_seats_available: 4,
            price_per_seat: 30,
            trip_description: "Departing 2220 Central Avenue, St. Petersburg, FL, 33712 at 8AM on January 29th and arriving at 737 Reitz Union Drive, Gainesville, FL, 32611 at 10:30AM on January 29th.",
            person_id: 1)

Trip.create!(departure_location_address: "1 Dali Blvd, St. Petersburg, FL, 33701",
            departure_location_latitude: 27.7660,
            departure_location_longitude: -82.6135,
            arrival_location_address: "109 West Silver Springs Boulevard, Ocala, FL 34475",
            arrival_location_latitude: 29.1872,
            arrival_location_longitude: -82.1380,
            departure_date: '2019-02-22', 
            departure_time: '10:00 AM', 
            arrival_date: '2019-02-22',
            arrival_time: '11:30 AM',
            rating: 5,
            number_of_seats_available: 4,
            price_per_seat: 25,
            trip_description: "Departing 1 Dali Blvd, St. Petersburg, FL, 33701 at 10AM on February 22nd and arriving at 109 West Silver Springs Boulevard, Ocala, FL 34475 at 11:30AM on February 22nd.",
            person_id: 2)
