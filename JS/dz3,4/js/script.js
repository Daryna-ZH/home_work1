
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






