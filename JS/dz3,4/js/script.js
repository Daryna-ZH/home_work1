

// var div1 = document.createElement('div');
// div1.className='conteiner';
// document.body.appendChild(div1);

// var test = [
// {
// 	question: '1. Вопрос №1',
// 	answers: ['Вариант ответа №1', 'Вариант ответа №1', 'Вариант ответа №1'],
// },

// {
// 	question: '2. Вопрос №2',
// 	answers: ['Вариант ответа №1', 'Вариант ответа №1', 'Вариант ответа №1'],
// },
// {
// 	question: '3. Вопрос №3',
// 	answers: ['Вариант ответа №1', 'Вариант ответа №1', 'Вариант ответа №1'],
// }
// ];

// var generator = {
// 	createTopic: function() {
// 		var topic = document.createElement('h1');
// 		topic.innerHTML = 'Тест по программированию';
// 		div1.appendChild(topic);
// 	},
// 	createTest: function() {
// 		var div2 = document.createElement('div');
//         var ul = document.createElement('ul');

//         for(var i = 0; i < test.length; i++) {
//         	var testItem = this.createQuestion(test[i]);
//         	ul.appendChild(testItem);
//         }
        
//         div2.appendChild(ul);
//         div1.appendChild(div2);
// 	},
// 	createQuestion: function(questionItem) {
// 		var questionLi = document.createElement('li');
// 		questionLi.innerHTML = questionItem.question; //tut
        
//         var ansverUl = document.createElement('ul');

//         for (var i = 0; i < questionItem.answers.length; i++) {
//         	var answerItem = this.createAnsver(questionItem.answers[i]);
//         	ansverUl.appendChild(answerItem);
//         }

//         questionLi.appendChild(ansverUl);

//         return questionLi;
// 	},
// 	createAnsver: function(answer) {
// 		var answerLi = document.createElement('li');
// 		var checkbox = document.createElement('input');
// 		checkbox.setAttribute('type', 'checkbox');
 
//         var answerText = document.createElement('span');
//         answerText.innerHTML = answer;

//         answerLi.appendChild(checkbox);
//         answerLi.appendChild(answerText);
// 	}

// }
// generator.createTopic();
// generator.createTest();
 // var appDiv = document.getElementById('app');
var div1 = document.createElement('div');
div1.className='conteiner';
document.body.appendChild(div1);
var topicText = "Тест по программированию";

var questions = [
  {
 question: '1. Вопрос №1',
 answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
  },
  {
 question: '2. Вопрос №2',
 answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
  },
  {
 question: '3. Вопрос №3',
 answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
  },
];

var generator = {
  createTopic: function() {
    var topic = document.createElement('h1');
    topic.innerHTML = topicText;
    div1.appendChild(topic);
  },
  createTest: function() {
    var div2 = document.createElement('div');
    var tests = document.createElement('ul');

    for(var i = 0; i < questions.length; i++) {
      var testItem = this.createQuestion(questions[i]);
      tests.appendChild(testItem);
    }

    div2.appendChild(tests);
    div1.appendChild(div2);
  },
  createQuestion: function(questionItem) {
    var question = document.createElement('li');

    question.innerHTML = questionItem.question;
    var answersHolder = document.createElement('ul');
    answersHolder.classList.add('content');


    for(var i = 0; i < questionItem.answers.length; i++) {
      var answerItem = this.createAnswer(questionItem.answers[i]);
      answersHolder.appendChild(answerItem);
    }

    question.appendChild(answersHolder);

    return question;
  },
  createAnswer: function(answer) {
    var answerElement = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    var answerText = document.createElement('span');
    answerText.innerHTML = answer;

    answerElement.appendChild(checkbox);
    answerElement.appendChild(answerText);

    return answerElement;
  },
  createSubmitButton: function() {
    var submitButton = document.createElement('button');
    submitButton.innerHTML = 'Проверить мои результаты';
    div1.appendChild(submitButton);
  },
};

generator.createTopic();
generator.createTest();
generator.createSubmitButton();


//  for (var key in test) {
//      alert(test[key])
//  }

// var element = document.createElement('h1');
// element.innerHTML = 'Тест по программированию';

// var container = document.querySelector('.container');
// container.appendChild(element);

// var tst = {
// 	question: function() {
// 		var ul = document.createElement('ul');
// 		ul.innerHTML = '1. Вопрос №1';
//         container.appendChild(element);
// 	}
// 	return question;
// }
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





