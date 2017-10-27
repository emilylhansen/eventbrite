class DropImageColumnsFromEvents < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :image_file_name
    remove_column :events, :image_content_type
    remove_column :events, :image_file_size
    remove_column :events, :image_updated_at
  end
end
