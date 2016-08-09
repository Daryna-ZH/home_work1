'use strict' 

function calcEnerg(m, V) {
    var E;
	var result;
  var m = prompt("Ввидите массу тела(кг)");
  var V = prompt("Введите скорость передвижения тела (м/с)");

  E = m*V*V / 2;

  var result = 'Кинетическая энергия тела равна ' + E + ' Дж';
  alert(result);
}

calcEnerg();

