$(document).ready(function() {
  $('.start').click(function() {
    var Timer, TotalSeconds;    
    CreateTimer("timer", 120);
    function CreateTimer(TimerID, Time) {
      Timer = document.getElementById(TimerID);
      TotalSeconds = Time;
      UpdateTimer();}    
    CreateInputBox();
    function CreateInputBox(){  
      $('#inputs').innerHTML("<input type='text' id='input'></input>");
      $('#inputs').innerHTML("<button class='submit' type='button' id='submit' value=''>Submit</button>");}   
    ShowQuestion(questionBody);
    function ShowQuestion(question){
      $('.question').innerHTML(question);}      
    function Tick() {
      if (TotalSeconds == 0) { 
        //use jQuery to add each element needed for data
        $.ajax({ //figure out how to score the answer 
          //and pass it to rails viewers#update and get back next question
          type: "POST",
          url: "/questions",
          data: { title: questionTitle, body: questionBody, answer: questionAnswer,
            show_id: questionShow_ID, viewer_id: questionViewer_ID,
            teaser_id: questionTeaser_ID, questionCompleted: "Yes",
            display_name: display_name, guid: guid }
          success: function(data){
            setQuestion(data);
            displayQuestion;}
        });
        return false;
      }
      TotalSeconds -= 1;
      UpdateTimer();
    }
    function UpdateTimer() {
      Timer.innerHTML = TotalSeconds;
      setTimeout(Tick, 1000);
    }    
    function StopTime(time) {
      TotalSeconds = time;
    }   
    $('#submit').click(function(){
        StopTime(0);
    });
  });  
})