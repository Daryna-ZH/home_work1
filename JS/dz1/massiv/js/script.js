'use strict'

var userArr = ['Вадим', 'Андрей', 'Кирилл', 'Никита', 'Данил'];

var user = prompt('Введите имя пользователя');

for (i = 0; i < userArr.length; i++) {
    if (userArr[i] == user) {
    	alert (user + ', hello');
    }
}


// if (userArr == user) {
// 	alert ('priv');
// } else	{
// 	alert ('sosi hui');
// }




// if (user == userArr) {
// 	alert('Error!');
// } else {
// 	alert( user + ', hello!');
// }

