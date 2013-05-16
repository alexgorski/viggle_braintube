class Question < ActiveRecord::Base
  attr_accessible :answer, :body, :title, :show_id
  belongs_to :show

  validates :answer, :presence => true
  validates :body, :presence => true
  validates :title, :presence => true
end
