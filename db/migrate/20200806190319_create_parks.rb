class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.integer :acreage
      t.string :contact
      t.text :description, null: false
      t.text :summary, null: false
      t.string :park_type
      t.float :lat, null: false
      t.float :lng, null: false
      t.timestamps
    end
  end
end
