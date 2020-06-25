class AddHikeColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :hikes, :distance, :float
    add_column :hikes, :elevation_gain, :integer
    add_column :hikes, :route_type, :string
  end
end
