class CreateTaggables < ActiveRecord::Migration[5.2]
  def change
    create_table :taggables do |t|
      t.integer :tag_id, null: false
      t.integer :taggable_id, null: false
      t.string :taggable_type, null: false

      t.timestamps
    end

    add_index :taggables, :tag_id
    add_index :taggables, :taggable_id
    add_index :taggables, [:tag_id, :taggable_id, :taggable_type], unique: true
  end
end
