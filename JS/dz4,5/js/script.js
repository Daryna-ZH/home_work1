'use strict'

var hoursCounter = 0;
var minCounter = 0;
var secCounter = 0;
var millCounter = 0;

var hours = document.getElementById('timer__hours');
var minutes = document.getElementById('timer__minutes');
var seconds = document.getElementById('timer__seconds');
var milliseconds = document.getElementById('timer__millisec');

var ButtonStart = document.getElementById('start');
var ButtonPause = document.getElementById('pause');
var ButtonStop = document.getElementById('stop');

// var updateHour;
// var updateMin;
// var updateSec;
// var updateMillisec;
var now = new Date();

ButtonStart.onclick = function() {
    updateMillisec = setInterval(updateMillisec, 10);
    updateSec = setInterval(updateSec, 1000);
    updateMin = setInterval(updateMin, 60000);
    updateHour = setInterval(updateHour, 3600000);
    ButtonStart.style.display = 'none';
	ButtonPause.style.display = 'inline-block';
}

ButtonPause.onclick = function() {
	// clearInterval(updateMillisec);
	// clearInterval(updateSec);
	// clearInterval(updateMin);
	// clearInterval(updateHour);
	ButtonStart.style.display = 'inline-block';
	ButtonPause.style.display = 'none';
}


function updateMillisec() {
	if (milliseconds > 999) {
		secCounter++;
		millCounter = 0;
	}
	millCounter += 10;
	updateCounters();
}
function updateSec() {
	if (seconds > 59) {
        minCounter++;
		secCounter = 0;
	}
	secCounter++;
	millCounter = 0;
	updateCounters();
}
function updateMin() {
	if (minutes > 59) {
		hoursCounter++;
		minCounter = 0;
	}
	minCounter++;
	secCounter = 0;
	updateCounters();
}
function updateHour() {
if (hours > 24) {
	alert('Прошли сутки!');
}
     hoursCounter++;
     minCounter = 0;
     updateCounters();
}

function updateCounters() {
	milliseconds.innerHTML = millCounter;
	seconds.innerHTML = secCounter;
	minutes.innerHTML = minCounter;
	hours.innerHTML = hoursCounter;
}


// var timer = 0;
// function sec() {
// 	timer++;
// }
// setInterval(sec, 1000);

// var elem = document.querySelector('button');

// function name() {

// alert('test' + timer);
// }

// elem.addEventListener('click', name)

// function runTimer() {

// 	setInterval(function() {
// 	var now = new Date();
    
// 	})
// }

// document.addEventListener('DOMContentLoaded', function() {
// // poluchit element id na stranice
// var id1 = document.getElementById('id1');
// id1.innerHTML = 'asdf' ;
// });


// _________________________
// document.addEventListener('DOMContentLoaded', function() {
// 	// mySuperTimer.initTimer('timer') ;
// });
// var mySuperTimer = {
// 	time: 12345; //time: 0
// 	//VIVOD NA EKRAN
// 	parser: function (t) {
// 		var res = {
// 			// h: '',
// 			// m: '',
// 			// s: '',
// 			// ms: '',
// 		}
//         res.ms = t % 1000;
//         t = t / 1000 >> 0;
//         res.s = t % 60;
//         t = t / 60 >> 0; //dopisat' chasi / 24
//         res.m = t % 60;
// 		return res;
// 	},
// 		view: function (time, tParent) {
//         parent = tParent || document.body;
//         var ms = tParent.getElementsByClassName('timer__ms')[0];
//         var s = tParent.getElementsByClassName('timer__seconds')[0];
//         var m = tParent.getElementsByClassName('timer__minutes')[0];
//         ms.innerHTML = time.ms;
//         s.innerHTML = time.s;
//         m.innerHTML = time.m;
// 		} ,
// 	initTimer: function (id){
// 		var result = document.getElementById(id);
// 		// result.innerHTML = '00.00.000';

// 		// setInterval(this.view(this.parser(this.time), result,13) ;
// 		var self = this;
// 		setInterval(function(){
// 			self.view(self.parser(self.time), result);
// 		}, 13);
// 		setInterval(function() {
// 			self.time = 
// 		}, 7)
// 		//mySuperTimer.time = 65432 - proverka
// 	},

// };