class Ride < ApplicationRecord
  belongs_to :person
  belongs_to :trip
end
