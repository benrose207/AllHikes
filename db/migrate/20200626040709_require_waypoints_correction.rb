class RequireWaypointsCorrection < ActiveRecord::Migration[5.2]
  def change
    change_column_null :hikes, :waypoints, false
  end
end
