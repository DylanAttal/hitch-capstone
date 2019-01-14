class TripsController < ApplicationController

  def show
    @trips = Trip.all

    render json: @trips.map { |trip|
      {
        departure_location_latitude: trip.departure_location_latitude,
        departure_location_longitude: trip.departure_location_longitude,
        departure_location_address: trip.departure_location_address,
        arrival_location_latitude: trip.arrival_location_latitude,
        arrival_location_longitude: trip.arrival_location_longitude,
        arrival_location_address: trip.arrival_location_address,
        departure_date: trip.departure_date,
        departure_time: trip.departure_time,
        arrival_date: trip.arrival_date,
        arrival_time: trip.arrival_time,
        rating: trip.rating,
        number_of_seats_available: trip.number_of_seats_available,
        price_per_seat: trip.price_per_seat,
        trip_description: trip.trip_description,
        driver_name: trip.person_id
      }     
    }
  end

  def create
    @trip = Trip.create(trip_params)

    render json: @trip
  end

  def trip_params
    params.require(:trip).permit(:departure_location_latitude, :departure_location_longitude, :departure_location_address,
    :arrival_location_latitude, :arrival_location_longitude, :arrival_location_address, :departure_date, :departure_time, 
    :arrival_date, :arrival_time, :number_of_seats_available, :price_per_seat)
  end

end