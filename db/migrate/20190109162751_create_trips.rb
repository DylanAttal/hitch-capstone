class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :departure_location_address
      t.decimal :departure_location_latitude
      t.decimal :departure_location_longitude
      t.string :arrival_location_address
      t.decimal :arrival_location_latitude
      t.decimal :arrival_location_longitude
      t.date :departure_date
      t.time :departure_time
      t.date :arrival_date
      t.time :arrival_time
      t.integer :rating
      t.integer :number_of_seats_available
      t.integer :price_per_seat
      t.text :trip_description
      t.references :person, foreign_key: true

      t.timestamps
    end
  end
end
