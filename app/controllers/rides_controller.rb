class RidesController < ApplicationController

  def show
    @rides = Ride.all

    render json: @rides
  end

  def delete
    ride = current_person.rides.find(params[:id])

    ride.destroy

    render json: ride
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
