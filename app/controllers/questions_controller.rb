class QuestionsController < ApplicationController

  def update
    # need to take an ajax post request 
    # and if the answer is right add the viewer to the question
    @question = Question.find(params[:id])
    if params[:completed] != "No"
      @question.completed = params[:completed]
    @question.save

    @new_question = Question.where(:show_id => params[:show_id], :viewer_id => params[:viewer_id], :completed => "No").first
    respond_to do |format|
       format.json {render :json => @new_question}
    end
  end

end
