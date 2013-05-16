class AddShowIdColumnToQuestions < ActiveRecord::Migration
  def change
    add_column :questions, :show_id, :integer
  end
end
