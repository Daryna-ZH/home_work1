'use strict'

var ButtonStart = document.getElementById('start');
var ButtonPause = document.getElementById('pause');
var ButtonStop = document.getElementById('stop');

var hours = document.getElementById('timer__hours');
var minutes = document.getElementById('timer__minutes');
var seconds = document.getElementById('timer__seconds');
var milliseconds = document.getElementById('timer__millisec');



window.onload = function() {
	var startTime;
    var interval = 0;
    var lastDifference;

    ButtonStart.addEventListener('click', startTimer);
    ButtonPause.addEventListener('click', pauseTimer);
    ButtonStop.addEventListener('click', stopTimer);

    function update() {
    	var now = (new Date()).getTime();
    	var difference;

        if (!lastDifference) {
        	difference = now - startTime;
        	lastDifference = difference;
        } else {
        	startTime = (new Date()).getTime() - lastDifference;
        	difference = lastDifference;
        	lastDifference = 0;
        }

    	var millCounter = difference % 1000;
    	difference = difference / 1000 >> 0;
    	var secCounter = difference % 60;
    	difference = difference / 60 >> 0;
    	var minCounter = difference % 60;
    	difference = difference / 60 >> 0;
    	var hourCounter = difference % 24;

    	milliseconds.innerHTML = millCounter;
    	seconds.innerHTML = secCounter;
    	minutes.innerHTML = minCounter;
    	hours.innerHTML = hourCounter;

    }

     function startTimer() {
     	if (!startTime) {
   	   startTime = (new Date()).getTime();
   	}
   	   interval = setInterval(update, 25);
    ButtonStart.style.display = "none";
   	ButtonPause.style.display = "inline-block";
    }

    function pauseTimer() {
    	clearInterval(interval);
    	ButtonPause.style.display = 'none';
        ButtonStart.style.display = 'inline-block';
    }

        function stopTimer() {
    	pauseTimer();
    	startTime = 0;
    	lastDifference = 0;
        milliseconds.innerHTML = seconds.innerHTML = minutes.innerHTML = hours.innerHTML = '00'
    }
}
