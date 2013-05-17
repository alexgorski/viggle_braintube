class Question < ActiveRecord::Base
  attr_accessible :answer, :body, :title, :show_id, :viewer_id
  belongs_to :show
  belongs_to :viewer

  validates :answer, :presence => true
  validates :body, :presence => true
  validates :title, :presence => true
end
