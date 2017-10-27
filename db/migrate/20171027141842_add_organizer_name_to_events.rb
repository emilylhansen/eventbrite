class AddOrganizerNameToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :organizer_name, :string, :null => false
  end
end
