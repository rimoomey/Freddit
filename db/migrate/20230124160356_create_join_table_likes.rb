class CreateJoinTableLikes < ActiveRecord::Migration[7.0]
  def change
    create_join_table :likeables, :users do |t|
      t.index [:likeable_id, :user_id]
      t.index [:user_id, :likeable_id]
    end
  end
end
