$(function() {

    var buzzer = $('#buzzer')[0],
        count = parseInt($("#breakNumber").html()),
        count2 = parseInt($("#sessNumber").html()),
        count3 = parseInt($("#timer").html());
        counter = null;
    
        /*buzzer.play();*/
    $("#start").click(function() {
        
        
        counter =  setInterval(timer,1000);
        count2 *= 60;
        count *= 60;
       
     
        
        function timer() {
            count2 -= 1;
            if(count2 === 0){
                buzzer.play();
                clearInterval(counter);
                var counter2 = setInterval(breakTimer,1000);
            }
            
            
            
            $('#timer').html(count2);
            
            if(count2 % 60 >= 10){
                $('#timer').html(Math.floor(count2/60) + ":" + count2 % 60)
            } else {
                $('#timer').html(Math.floor(count2/60) + ":" + "0" + count2 % 60)
            }
            
            
            
            function breakTimer() {
                $('#sessClock').html("Break!");
                
                count -= 1;
                if(count === 0){
                    clearInterval(counter2);
                    buzzer.play();
                    
                }
                $('#timer').html(count);
                
                  if(count % 60 >= 10){
                $('#timer').html(Math.floor(count/60) + ":" + count % 60);
            } else {
                $('#timer').html(Math.floor(count/60) + ":" + "0" + count % 60);
                }
            }
            
            
        }
    });
    
    $('#stop').click(function pause(){
       if(counter){
           clearInterval(counter);
           counter = null;
       } 
        
    });
 
    
    /*VV Toggle control for buttons  VV*/
    
    $("#breakDecrease").click(function() {
        
        if(count > 0){
            count -= 1;
            $("#breakNumber").html(count);
        }
        
        event.preventDefault();
        
    });
    
    $("#breakIncrease").click(function(){
        if(count > 0){
       count += 1;
        
        $("#breakNumber").html(count);
            
        }
    });
    
    
     $("#sessDecrease").click(function(){
        
        if(count2 && count3 > 0){
            count2 -= 1;
            count3 -= 1;
            $("#sessNumber").html(count2);
            $('#timer').html(count3);
        }
        
        event.preventDefault();
        
    });
    
    $("#sessIncrease").click(function(){
        if(count2 && count3 > 0){
            count2 += 1;
            count3 += 1;
        
        
        $("#sessNumber").html(count2);
        $('#timer').html(count3);
            
        }
    });
    
    $("#reset").click(function() {
        
        location.reload();
    });
    
    
    
    
});