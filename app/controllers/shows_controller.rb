class ShowsController < ApplicationController                                                                                                                                                                                                                                                                                                                                                                                                                                            

  def index
  end
  def create
    @show = Show.find_or_create_by_title(params[:title])
    @show.program_id = params[:program_id]
    @show.category = params[:category]
    @show.ad_target_genres = params[:ad_target_genres]
    @show.viewers.build(:gender => params[:gender],
        :display_name => params[:display_name], 
        :guid => params[:guid],
        :zipcode => params[:zipcode],
        :primary_tv_provider => params[:primary_tv_provider])
    @show.save
    @viewer = Viewer.find(:guid => params[:guid]) 
    Question.make_questions(@show, @viewer)
    
    # if i do a $.getJSON get request passing the above data, can i then respond with
    @question = Question.where(:show_id => @show.id, :viewer_id => @viewer.id, :completed => "No").first
    respond_to do |format|
       format.json {render :json => @question}
    end
  end

  # def show
  #   @show = Show.find(params[:title])
  #   @questions = Question.where(:show_id => @show.id).all
  #   respond_to do |format|
  #     format.js {render :json => @questions}
  #   end
  # end

end
