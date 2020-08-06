class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :city, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.integer :locationable_id, null: false
      t.string :locationable_type, null: false
      t.timestamps
    end

    add_index :locations, [:locationable_id, :locationable_type], unique: true
  end
end
