// <!-- 
//     HW6 Starter code
//      Modified from: https://codepen.io/cathydutton/pen/GBcvo
//      Andrew Perez
//      CPSC 332 Web Development 
//      Assignment #6
//      Last Modified Date: 11/18/2022
    // This was the last one!!!
//     -->
$(document).ready(function () {
    var $seconds = 00;
    var $tens = 00;
    var $appendTens = $(document.getElementById("tens"));
    var $appendSeconds = $(document.getElementById("seconds"));
    var $buttonStart = $(document.getElementById('button-start'));
    var $buttonStop = $(document.getElementById('button-stop'));
    var $buttonReset = $(document.getElementById('button-reset'));
    var $interval;
    var $checkStartButton = false;
    var $animatedTime;

    $buttonStart.on("click", function () {
        $checkStartButton = true;
        clearInterval($interval);
        $interval = setInterval(startTimer, 10);
        $(".timer-background").css({
            "background-color": "green"
        });
    });

    $buttonStop.on("click", function () {
        clearInterval($interval);
        //if start button was clicked and not reset button, change to red
        if ($checkStartButton){
            $(".timer-background").css({
                "background-color": "red"
            });
        }
        
        
    });

    $buttonReset.on("click", function () {
        clearInterval($interval);
        $tens = "00";
        $seconds = "00";
        $appendTens.html($tens);
        $appendSeconds.html($seconds);
        $(".timer-background").css({
            "background-color": "orange"
       });
       $checkStartButton = false;
    });

    function startTimer() {
        $tens++;

        if ($tens < 9) {
            $appendTens.html("0" + $tens);
        }

        if ($tens > 9) {
            $appendTens.html($tens);

        }

        if ($tens > 99) {
            console.log("seconds");
            $seconds++;
            $appendSeconds.html("0" + $seconds);
            $tens = 0;
            $appendTens.html("0" + 0);
        }

        if ($seconds > 9) {
            $appendSeconds.html($seconds);
        }
        
        clearInterval($animatedTime); //clear this shit
        $animatedTime = setInterval(function(){
            $(".timer-background").animate({opacity: 0.8},"slow");
            $(".timer-background").animate({opacity: 1.0},"slow");
        },10);
    }
   $(".wrapper").css({
        width: "300px",
        height: "90px",
        margin: "100px auto",
        "background-color": "purple",
        color: "#333",
        "border-radius": "10px",
        padding: "60px 50px 100px",
        "text-align": "center",
        "font-size": "30px",
        height: "fit-content"
   });
    $(".wrapper button").css({
        background: "#c7e0f8",
        color: "#0776de",
        padding: "10px",
        width: "55px",
        "border-radius": "5px",
        margin: "3px",
        display: "inline-block",
        "margin-left": "20px"
    });

   $("p, span, h1, h2").css({
        color: "white"
    });  
    
    

});
