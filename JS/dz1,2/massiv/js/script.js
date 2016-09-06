'use strict'

var arr = []; 
var counter = 0;
while (counter < 5) {
  var name = prompt('Введите имя ' + (counter+1) + ' пользователя'); 
  if (name !== '') {
    arr.push(name);
 counter++
 } else {
    alert('Вы не ввели имя!');
  }
}

console.log(arr); 

var name = prompt('Введите имя пользователя'); 

if (arr.includes(name)) { 
  alert (name + ' , вы успешно вошли') 
} else {
  alert('Ошибка! Пользователь не найден.') 
}

