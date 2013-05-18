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
      $('#inputs').append("<input type='text' id='input'></input>");
      $('#inputs').append("<button class='submit' type='button' id='submit' value=''>Submit</button>");}
    
    ShowQuestion(questionBody);
    function ShowQuestion(question){
      $('.question').append(question);}
      
    function Tick() {
      if (TotalSeconds == 0) { 
        //use jQuery to add each element needed for data
        $.ajax({ //figure out how to score the answer 
          //and pass it to rails viewers#update and get back next question
          type: "POST",
          url: "/questions",
          data: "title="+questionTitle,
          success: function(data){
            var parsedData = JSON.parse(data);
            setQuestion(parsedData);}
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
    };
  });  
});
