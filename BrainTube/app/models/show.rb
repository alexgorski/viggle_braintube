class Show < ActiveRecord::Base
  attr_accessible :title, :program_id, :category, :ad_target_genres

  has_many :characters
  has_many :viewers
end
