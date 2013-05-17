
$(document).ready(function() {

  $(".start").click(function () {
    var Timer;
    var TotalSeconds;
    var question = questions[0]
    CreateTimer("timer", 120);
    function CreateTimer(TimerID, Time) {
      Timer = document.getElementById(TimerID);
      TotalSeconds = Time;
      UpdateTimer()
    }
    
    CreateInputBox("inputs");
    function CreateInputBox(InputID){
      
      $('#inputs').append("<input type='text' id='input'></input>");
    }
    
    function ShowQuestion(Questions){
      var question =
      $('.question').append(data);
    }
    
    
    function Tick() {
      if (TotalSeconds == 0) {
        var name = $("#start_line input").val();
        var correct = $("#total_right").text();
        var incorrect = $("#total_wrong").text();
        var op = $("#operator").text();
        var lev = $("#level").text();
        
        //use jQuery to add each element needed for data
        $.ajax({
          type: "POST",
          url: "/questions",
          data: "name="+name+"&right="+correct+"&wrong="+incorrect+"&operator="+"a"+"&level="+lev,
          success: function(){
          alert("success");
          }
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
  });
});