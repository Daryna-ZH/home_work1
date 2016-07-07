'use strict'

// function pow () {
// var prod = {};
// prod.a = +promt ('Введите число');
// prod.n = +promt ('Введите степень, в которую необходимо возвести число');
// }

// function pow(prod) {
// 	function powNat(a,n) {
// 		var res = 1;
// 		for (var i=0; i<n; i++);
// 			res *=a;
// 	}
// 	return res;
// }
// function pow () {
// 	var a {};
// 	var n {};
// prod.a = promt('Введите число', '');
// prod.n = promt('Введите степень, в которую необходимо возвести число','');
// } 

// function pow(a, n) {
// 	var result = 1;
// 	for (var i = 0; i < n; i++) {
// 		result *= a;
// 	}

//     return result;
// }


// if (n < 0) {
// 	alert('blabla')
// } else {
// 	alert( pow(a, n) );
// }

// __________________

var object = {
    army: [
        {
        	name: 'V',
        	age: 23,
        	weight: 12,
        	iq: 80,
        } ,
        {
        	name: 'script.js',
        	age: 20,
        	weight: 21,
        	height: 18,
        },
    ],


	CreateElement: function(eTag, eClass, eParent) {
		var el = document.createElement(eTag) ;
        eParent.appendChild(wrapper) ;
        el.classList.add(eClass) ;
		return el;
	}

	CreateSoldier: function (i, parent) {
		var soldier = this.CreateElement ('ul', 'soldier' , parent) ;
		soldier.innerHTML = this.army[i].name ;
		for (var key in this.army[i]) {
			if (key != 'name') {
			var soldierPar = this.CreateElement('li' , 'soldier_par', soldier) ;
			soldierPar.innerHTML = key + ': ' + this.army[i] [key];
		}
	}
	Create: function() {
       var wpapper = this.CreateElement('div', 'wrapper', document.body) ;
       for (var i = 0; i < this.army.length; i++) {
       	// console.log(this.army[i].name) 
       	  this.CreateSoldier (i, wrapper) ;

       	}
       }
	} ,
}

object.Create() ;
