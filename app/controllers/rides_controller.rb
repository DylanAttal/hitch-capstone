class RidesController < ApplicationController

  def show
    @rides = Ride.all

    render json: @rides
  end

  def create
    ride = current_person.rides.create(ride_params)

    render json: ride
  end

  private

  def ride_params
    params.require(:ride).permit(:trip_id)
  end
end
