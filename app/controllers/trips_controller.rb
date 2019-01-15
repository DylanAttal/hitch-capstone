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
        depart_at: trip.depart_at,
        arrive_at: trip.arrive_at,
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

  def search
    @trips = Trip.all

    # If there is a lat and lng for departure, then add another query based on near-ness to that location
    departure_location_latitude = params[:trip][:departure_location_latitude]
    departure_location_longitude = params[:trip][:departure_location_longitude]
    # if departure_location_latitude.present? && departure_location_longitude.present?
    #   @trips = @trips.near([departure_location_latitude, departure_location_longitude], 50)
    # end

    # If there is a lat and lng for arrival, then add another query based on near-ness to that location
    arrival_location_latitude = params[:trip][:arrival_location_latitude]
    arrival_location_longitude = params[:trip][:arrival_location_longitude]
    # if arrival_location_latitude.present? && arrival_location_longitude.present?
    #   @trips = @trips.near([arrival_location_latitude, arrival_location_longitude], 50)
    # end

    if params[:trip][:depart_at].present?
      depart_at = Time.parse(params[:trip][:depart_at])

      @trips = @trips.where("depart_at between ? and ?", depart_at - 6.hours, depart_at + 6.hours)
    end
    
    if params[:trip][:arrive_at].present?
      arrive_at = Time.parse(params[:trip][:arrive_at])

      @trips = @trips.where("arrive_at between ? and ?", arrive_at - 6.hours, arrive_at + 6.hours)
    end

    # Exact match the number of seats but only if given
    number_of_seats_available = params[:trip][:number_of_seats_available]
    if number_of_seats_available.present?
      @trips = @trips.where("number_of_seats_available >= ?", number_of_seats_available)
    end

    # Exact match the price per seat
    price_per_seat = params[:trip][:price_per_seat]
    if price_per_seat.present?
      @trips = @trips.where("price_per_seat <= ?", price_per_seat)
    end

    render json: @trips.map { |trip| 
      {
        departure_location_latitude: trip.departure_location_latitude,
        departure_location_longitude: trip.departure_location_longitude,
        departure_location_address: trip.departure_location_address,
        arrival_location_latitude: trip.arrival_location_latitude,
        arrival_location_longitude: trip.arrival_location_longitude,
        arrival_location_address: trip.arrival_location_address,
        depart_at: trip.depart_at,
        arrive_at: trip.arrive_at,
        rating: trip.rating,
        number_of_seats_available: trip.number_of_seats_available,
        price_per_seat: trip.price_per_seat,
        trip_description: trip.trip_description,
        driver_name: trip.person_id
      }
    }
  end

  def trip_params
    params.require(:trip).permit(:departure_location_latitude, :departure_location_longitude, :departure_location_address,
    :arrival_location_latitude, :arrival_location_longitude, :arrival_location_address, :depart_at, :arrive_at, 
    :number_of_seats_available, :price_per_seat)
  end

end
