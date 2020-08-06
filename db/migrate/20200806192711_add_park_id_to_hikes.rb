class AddParkIdToHikes < ActiveRecord::Migration[5.2]
  def change
    add_column :hikes, :park_id, :integer
    add_index :hikes, :park_id
  end
end
