class Teaser < ActiveRecord::Base
  attr_accessible :answer, :body, :title

  has_many :questions
end
