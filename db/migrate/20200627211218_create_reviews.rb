class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :review_text, null: false
      t.string :activity, null: false
      t.date :activity_date, null: false
      t.integer :user_id, null: false
      t.integer :hike_id, null: false

      t.timestamps
    end
    
    add_index :reviews, :user_id
    add_index :reviews, :hike_id
    add_index :reviews, [:user_id, :hike_id, :activity_date], unique: true
  end
end
