class CreateTickets < ActiveRecord::Migration[5.1]
  def change
    create_table :tickets do |t|
      t.integer :event_id, null: false
      t.integer :purchaser_id, null: false
      t.timestamps
    end
    add_index :tickets, :event_id
    add_index :tickets, :purchaser_id
  end
end
