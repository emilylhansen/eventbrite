class ChangeImageFromEvents < ActiveRecord::Migration[5.1]
  def change
    change_column :events, :image_file_name, :string, :null => false
    change_column :events, :image_content_type, :string, :null => false
    change_column :events, :image_file_size, :integer, :null => false
    change_column :events, :image_updated_at, :datetime, :null => false
  end
end
