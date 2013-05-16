class AddShowIdToViewer < ActiveRecord::Migration
  def change
    add_column :viewers, :show_id, :integer
  end
end
