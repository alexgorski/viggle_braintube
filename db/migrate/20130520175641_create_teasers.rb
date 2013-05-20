class CreateTeasers < ActiveRecord::Migration
  def change
    create_table :teasers do |t|
      t.string :title
      t.text :body
      t.string :answer
      t.timestamps
    end
  end
end
