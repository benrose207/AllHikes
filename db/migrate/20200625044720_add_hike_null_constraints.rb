class AddHikeNullConstraints < ActiveRecord::Migration[5.2]
  def change
    change_column_null :hikes, :distance, false
    change_column_null :hikes, :route_type, false
  end
end
