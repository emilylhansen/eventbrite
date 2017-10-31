class AddLocationToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :location, :string, :null => false
  end
end
