class Viewer < ActiveRecord::Base
  attr_accessible :gender, :display_name, :guid, :zipcode, :primary_tv_provider, :show_id
  belongs_to :show
  has_many :questions
end
