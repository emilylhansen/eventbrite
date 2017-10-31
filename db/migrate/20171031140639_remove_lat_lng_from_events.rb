class RemoveLatLngFromEvents < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :lat
    remove_column :events, :lng
  end
end
