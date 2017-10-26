class AddNumTicketsToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :num_tickets, :integer
    change_column_null :events, :num_tickets, false
    change_column :events, :price, :float
  end
end
