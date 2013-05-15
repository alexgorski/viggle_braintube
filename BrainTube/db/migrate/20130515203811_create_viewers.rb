class CreateViewers < ActiveRecord::Migration
  def change
    create_table :viewers do |t|
      t.string :gender
      t.string :display_name 
      t.string :guid 
      t.string :zipcode
      t.string :primary_tv_provider
      t.timestamps
    end
  end
end
