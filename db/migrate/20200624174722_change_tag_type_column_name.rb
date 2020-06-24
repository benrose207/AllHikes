class ChangeTagTypeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :tags, :type, :tag_type
  end
end
