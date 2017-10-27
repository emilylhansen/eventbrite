class ChangeImagesFromEvents < ActiveRecord::Migration[5.1]
  def change
    change_column :events, :image_file_name, :string, :null => true
    change_column :events, :image_content_type, :string, :null => true
    change_column :events, :image_file_size, :integer, :null => true
    change_column :events, :image_updated_at, :datetime, :null => true
  end
end
