
// var title = 'Тест по программированию';

// var q = [ 
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
// function clearForm(name) {
// 	var f = document.forms[name];
// 	for(var i = 0; i < f.elements.length; ++i) {
// 		if(f.elements[i].checked)
// 			f.elements[i].checked = false;
// 	}
// // }
// function conteiner() {
// 	var parent = document.createElement('myContainer');
//     var div = document.createElement('div');
//     div.className = 'test';
//     var text = "blabla";
//     var textNode = document.createTextNode(text);
//     div.appendChild(textNode);
//     parent.appendChild(div);

// }

	var parent = document.createElement('div');
	parent.classList.add('proverka');
	parent.innerHTML = 'rabotai suka';

	var wrapper = document.querySelector('.wrapper');
	wrapper.insertBefore(parent, wrapper.children[0]);

// var ul = document.createElement('ul');
// var li = document.createElement('li');