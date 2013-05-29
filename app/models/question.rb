class Question < ActiveRecord::Base
  attr_accessible :answer, :body, :title, :completed, :teaser_id :show_id, :viewer_id
  belongs_to :show
  belongs_to :viewer
  belongs_to :teaser

  validates :answer, :presence => true
  validates :body, :presence => true
  validates :title, :presence => true

  #make questions from show, viewer, and teaser models
  def self.make_questions(show,viewer)
    @teasers = Teaser.all 
    @teasers.each do |t|
      q = Question.new(:title => t.title,
                   :body => t.body, 
                   :answer => t.answer, 
                   :show_id => show.id, 
                   :viewer_id => viewer.id
                   :teaser_id => t.id
                   :completed => "No")
      q.change_title
      q.change_body(t.size)
      q.save
    end

  end

#Take the teaser title and append it with the show title
  def change_title
    self.title = self.title + "_" + Show.find(:id => self.show_id).title
    self.save
  end

#Take the teaser body and if there are character names, randomly substitute 
#character names for the generic names
  def change_body(num_of_characters)
    chars = Show.find(:id => self.show_id).characters
    question_characters = []
    for i in 0..num_of_characters
      x = chars[rand(chars.size)]
      question_characters.include? x ? nil : question_character << x
    end
    for i in 0..num_of_characters
      self.body.gsub!("Person#{i}",question_characters[i])
    end
    self.save
  end
end
