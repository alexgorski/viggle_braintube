class Viewer < ActiveRecord::Base
  attr_accessible :gender, :display_name, :guid, :zipcode, :primary_tv_provider
  belongs_to :shows
end
