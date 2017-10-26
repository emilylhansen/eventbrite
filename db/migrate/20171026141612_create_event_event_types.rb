class CreateEventEventTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :event_event_types do |t|
      t.integer :event_id, null: false
      t.integer :event_type_id, null: false
    end
  end
end
