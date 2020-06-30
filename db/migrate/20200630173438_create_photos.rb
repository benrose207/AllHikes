class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :caption
      t.integer :hike_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :photos, :hike_id
    add_index :photos, :user_id
  end
end
