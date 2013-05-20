class AddTeaser < ActiveRecord::Migration
  def change
    add_column :questions, :completed, :string
  end
end
