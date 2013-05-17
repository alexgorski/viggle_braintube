class AddQuestionToViewer < ActiveRecord::Migration
  def change
    add_column :questions, :viewer_id, :integer
  end
end
