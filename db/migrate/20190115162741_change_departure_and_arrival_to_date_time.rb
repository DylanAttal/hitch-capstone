class ChangeDepartureAndArrivalToDateTime < ActiveRecord::Migration[5.2]
  def change
    remove_column :trips, :departure_date
    remove_column :trips, :departure_time
    remove_column :trips, :arrival_date
    remove_column :trips, :arrival_time
    add_column :trips, :depart_at, :datetime
    add_column :trips, :arrive_at, :datetime
  end
end
