class CreateHikes < ActiveRecord::Migration[5.2]
  def change
    create_table :hikes do |t|
      t.string :name, null: false
      t.text :description
      t.text :contact
      t.float :lng, null: false
      t.float :lat, null: false
      t.string :difficulty, null: false
      t.string :usage

      t.timestamps
    end

    add_index :hikes, :name, unique: true
  end
end
