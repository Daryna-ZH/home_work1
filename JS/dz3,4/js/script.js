    // var newDiv = document.createElement("div");
    //     newDiv.innerHTML = "<h1>Привет!</h1>";
    //     document.body.appendChild(newDiv);


var element = document.createElement('h1');
element.innerHTML = 'Тест по программированию';

var container = document.querySelector('.container');
container.appendChild(element);

var tst = {
	question: function() {
		var ul = document.createElement('ul');
		ul.innerHTML = '1. Вопрос №1';
        container.appendChild(element);
	}
	return question;
}
	// "1. Вопрос №1": {
	// 	"Вариант ответа №1": {},
	// 	"Вариант ответа №2": {},
	// 	"Вариант ответа №3": {}
	// },
	// 	"2. Вопрос №2": {
	// 	"Вариант ответа №1": {},
	// 	"Вариант ответа №2": {},
	// 	"Вариант ответа №3": {}
	// },
	// 	"3. Вопрос №3": {
	// 	"Вариант ответа №1": {},
	// 	"Вариант ответа №2": {},
	// 	"Вариант ответа №3": {}
	// }

// function createTest(test, obj) {
// 	test.appendChild(createTestNow(obj));
// }
// function createTestNow(obj) {
// 	if (isObjectEmpty(obj)) return;

// var ul = document.createElement('ul');

// for (var key in obj) {
// 	var li = document.createElement('li');
// 	li.innerHTML = key;

// 	var childrenUl = createTestNow(obj[key]);
// 	if (childrenUl) li.appendChild(childrenUl);

// 	ul.appendChild(li);
//    }
//    return ul;
// }

// function isObjectEmty(obj) {
// 	for (var key in obj) {
// 		return false;
// 	}
// 	return true;
// }

// var test = document.getElementById('test');
// createTest(test, tst);
// var test = [ 
// {
// 	question: '1. Вопрос №1',
// 	answers: ['Вариант ответа №1', 
// 	          'Вариант ответа №2', 
// 	          'Вариант ответа №3'],
// },
// {
// 	question: '2. Вопрос №2',
// 	answers: ['Вариант ответа №1', 
// 	          'Вариант ответа №2', 
// 	          'Вариант ответа №3'],
// },
// {
// 		question: '3. Вопрос №3',
// 	answers: ['Вариант ответа №1', 
// 	          'Вариант ответа №2', 
// 	          'Вариант ответа №3'],
// }
// ];
// function sozd() {
// 	var elem = document.createElement('h1');
// 	elem.innerHTML = 'Тест по программированию';
// 	container.appendChild(elem);
// }





