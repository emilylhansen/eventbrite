class AddAvatarToEvents < ActiveRecord::Migration[5.1]
  def up
   add_attachment :events, :avatar
 end

 def down
   remove_attachment :events, :avatar
 end
end
