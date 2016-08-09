'use strict'


document.addEventListener('DOMContentLoaded', function() {
// poluchit element id na stranice
var id1 = document.getElementById('id1');
id1.innerHTML = 'asdf' ;
});


_________________________
document.addEventListener('DOMContentLoaded', function() {
	// mySuperTimer.initTimer('timer') ;
});

var mySuperTimer = {
	time: 12345; //time: 0
	//VIVOD NA EKRAN
	parser: function (t) {
		var res = {
			// h: '',
			// m: '',
			// s: '',
			// ms: '',
		}
        res.ms = t % 1000;
        t = t / 1000 >> 0;
        res.s = t % 60;
        t = t / 60 >> 0; //dopisat' chasi / 24
        res.m = t % 60;
		return res;
	},
		view: function (time, tParent) {
        parent = tParent || document.body;
        var ms = tParent.getElementsByClassName('timer__ms')[0];
        var s = tParent.getElementsByClassName('timer__seconds')[0];
        var m = tParent.getElementsByClassName('timer__minutes')[0];
        ms.innerHTML = time.ms;
        s.innerHTML = time.s;
        m.innerHTML = time.m;
		} ,
	initTimer: function (id){
		var result = document.getElementById(id);
		// result.innerHTML = '00.00.000';

		// setInterval(this.view(this.parser(this.time), result,13) ;
		var self = this;
		setInterval(function(){
			self.view(self.parser(self.time), result);
		}, 13);
		setInterval(function() {
			self.time = 
		}, 7)
		//mySuperTimer.time = 65432 - proverka
	},

};