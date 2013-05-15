class Character < ActiveRecord::Base
  attr_accessible :name, :gender, :actor_name

  belongs_to :show

  validates :name, :presence => true

end
