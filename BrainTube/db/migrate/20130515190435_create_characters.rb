class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :name 
      t.string :gender
      t.string :actor_name
      t.timestamps
    end
  end
end
