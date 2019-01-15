# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_15_162741) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "people", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "age"
    t.text "bio"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rides", force: :cascade do |t|
    t.bigint "person_id"
    t.bigint "trip_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["person_id"], name: "index_rides_on_person_id"
    t.index ["trip_id"], name: "index_rides_on_trip_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "departure_location_address"
    t.decimal "departure_location_latitude"
    t.decimal "departure_location_longitude"
    t.string "arrival_location_address"
    t.decimal "arrival_location_latitude"
    t.decimal "arrival_location_longitude"
    t.integer "rating"
    t.integer "number_of_seats_available"
    t.integer "price_per_seat"
    t.text "trip_description"
    t.bigint "person_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "depart_at"
    t.datetime "arrive_at"
    t.index ["person_id"], name: "index_trips_on_person_id"
  end

  add_foreign_key "rides", "people"
  add_foreign_key "rides", "trips"
  add_foreign_key "trips", "people"
end
