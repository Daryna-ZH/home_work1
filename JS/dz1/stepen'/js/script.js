'use strict' 

function powNat(x, n) { 
	var result = 1; 
	for (var i = 0; i < n; i++) { 
		result *= x; 
	} 
	return result; 
} 

function powInt(x, n) {
	var result; 
	if (n < 0) { 
		n = -n;
		result = 1/powNat(x, n); 
	} else { 
		result = powNat(x, n); 
	} 
	return result; 
} 


var x = prompt("Введите число", ''); 
var n = prompt("Введите степень, в которую необходимо возвести число", ''); 

alert( powInt(x, n)); 