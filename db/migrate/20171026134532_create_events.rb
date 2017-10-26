class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.datetime :start_date_time, null: false
      t.datetime :end_date_time, null: false
      t.attachment :image, null: false
      t.text :description, null: false
      t.integer :price, null: false
      t.integer :organizer_id, null: false
      t.string :organizer_description, null: false
      t.timestamps
    end
    add_index :events, :organizer_id
  end
end
