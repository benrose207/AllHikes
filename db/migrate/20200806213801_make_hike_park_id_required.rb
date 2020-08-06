class MakeHikeParkIdRequired < ActiveRecord::Migration[5.2]
  def change
    change_column_null :hikes, :park_id, false
  end
end
