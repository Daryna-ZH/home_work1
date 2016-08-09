'use strict'

var arr = [];
for (var i = 0; i < 5; i++) {
	arr.push(prompt('5 имён для заполнения массива'))
}
console.log(arr);

var name = prompt('Введите имя пользователя');
	
if (arr.includes(name)) {
	alert (name + ' , вы успешно вошли')
} else {
	alert('Ошибка! Пользователь не найден.')
}


