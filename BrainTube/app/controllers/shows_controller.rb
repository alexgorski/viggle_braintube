class ShowsController < ApplicationController


  def index
  end
  def create
    @show = Show.find_or_create_by_title(params[:title])
    @show.title = params[:title]
    @show.program_id = params[:program_id]
    @show.category = params[:category]
    @show.ad_target_genres = params[:ad_target_genres]
    #need logic that builds a viewer
    @show.viewers.build(:gender => params[],:display_name => params[], :guid => params[], :zipcode => params[], :primary_tv_provider => params[])
    @show.save
  end

end

:gender, :display_name, :guid, :zipcode, :primary_tv_provider