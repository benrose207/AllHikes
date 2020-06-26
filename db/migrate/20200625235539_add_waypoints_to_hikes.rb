class AddWaypointsToHikes < ActiveRecord::Migration[5.2]
  def change
    add_column :hikes, :waypoints, :text
  end
end
