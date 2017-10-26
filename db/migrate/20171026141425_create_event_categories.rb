class CreateEventCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :event_categories do |t|
      t.integer :event_id, null: false
      t.integer :category_id, null: false
    end
  end
end
