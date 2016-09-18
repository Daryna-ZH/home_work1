// посчитать позицию єлемента (7-8)

rendertime
updateViewIntervalId
window.onload =function() {
var startTime; //заполняем по нажатию кнопки старт
var pauseTime;
var updateViewIntervalId; 
setInterval(function() {
	if (pauseTime) {
		если нажали на паузу то обображаем разницу между началом и ...
		(pauseTime - startTime);
	}
	var now = new Date();
	console.log(startTime)
	if (startTime) {
var difference = now.getTime() - startTime.getTime();
var ms = difference % 1000;
var ss = Math.floor(difference - 1000); // floor - okruglenie
var min = Math.floor(ss / 60);
ss = ss % 60 (ss - min * 60);
document.querySelector
// document.querySelector('.time').innerHTML = min + ":" + ss +':' + ms//считаем теоретически, чтобі получить часі, минуті, секунді
	} else {
		document.querySelector('.time')
	}
	if (startTime && !pauseTime) {
		//pause
document.getElementById('start', style.display = 'none');
	} else {
//start( none, inline-block)

	}
}25);
document.getElementById('start').addEventListener('click', function() {
	startTime = new Date();
});
document.getElementById('stop').addEventListener('click', function() {
	startTime = underfined;
	
}
document.getElementById('pause').addEventListener('click', function() {
	pauseTime = (new Date()).getTime();
}
}

// 2 формы , от первого, второго лица
// история сообщений


var submitButton = document.getElementById('start');
var divContent = document.getElementById('chat');

submitButton.onclick = function() {
     var text = document.getElementById('userSubmit').value;
     var user = document.getElementById('nameUsers').value;

     text.appendChild(divContent);
     divContent.innerHTML('<span>"text"</span');


     
}



 
