var button = document.getElementById('add');
var conteiner = document.querySelectorAll('div')[0];

button.addEventListener('click', openList);

function openList() {

	var divTasks = document.createElement('div');
	divTasks.className = 'tasks';
	conteiner.appendChild(divTasks);

	

}