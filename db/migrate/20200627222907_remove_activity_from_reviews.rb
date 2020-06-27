class RemoveActivityFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :activity
  end
end
