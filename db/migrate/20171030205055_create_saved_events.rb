class CreateSavedEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :saved_events do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
      t.timestamps
    end
  end
end
