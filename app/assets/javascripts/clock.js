$(document).ready(function() {

  $(".start").click(function() {
    var Timer;
    var TotalSeconds;
    var question = questions[0]
    
    CreateTimer("timer", 120);
    function CreateTimer(TimerID, Time) {
      Timer = document.getElementById(TimerID);
      TotalSeconds = Time;
      UpdateTimer()
    }
    
    CreateInputBox();
    function CreateInputBox(InputID){  
      $('#inputs').append("<input type='text' id='input'></input>");
      $('#inputs').append("<button class='start' type='button' id='submit' value=''>Submit</button>");
    }
    
    ShowQuestion(questionBody)
    function ShowQuestion(Question){
      $('.question').append(Question);
    }
      
    function Tick() {
      if (TotalSeconds == 0) { 
        //use jQuery to add each element needed for data
        $.ajax({ //figure out how to score the answer 
          //and pass it to rails viewers#update and get back next question
          type: "POST",
          url: "/questions",
          data: "name="+name+"&right="+correct+"&wrong="+incorrect+"&operator="+"a"+"&level="+lev,
          success: function(data){
            setQuestion(JSON.parse(data));
          };
        });
        return false;
        
      }
      TotalSeconds -= 1;

      UpdateTimer();
      
      $('#submit').click(function(){StopTime(0);};
    }

    function UpdateTimer() {
      Timer.innerHTML = TotalSeconds;
      setTimeout(Tick, 1000);
    }
    
    function StopTime(time) {
      TotalSeconds = time;
    }
  });
});