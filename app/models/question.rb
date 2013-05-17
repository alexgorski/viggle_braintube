class Question < ActiveRecord::Base
  attr_accessible :answer, :body, :title, :show_id
  belongs_to :show
  has_many :viewers

  validates :answer, :presence => true
  validates :body, :presence => true
  validates :title, :presence => true
end
