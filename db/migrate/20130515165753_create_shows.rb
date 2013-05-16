class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.string :title 
      t.string :program_id
      t.string :category
      t.text :ad_target_genres
      t.timestamps
    end
  end
end
