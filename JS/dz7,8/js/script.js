$(function() {
  
var $wrapper = $('body').append('<div class="wrapper"></div>');

var $conteiner = $('.wrapper').append('<div class="conteiner"></div>');
var $buttons = $('.conteiner').append('<div class="buttons"></div>');
var $content = $('.conteiner').append('<div class="content"></div>');

var $button1 = $('.buttons').append('<button>Nunc tincidunt</button>');
var $button2 = $('.buttons').append('<button>Proin dolor</button>');
var $button3 = $('.buttons').append('<button>Aenean lacinia</button>');

$button1.on('click', function() {
	$('.content')
	.text('Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.')

});








});


$(function() {
	var $tooltip = $('body').append('<div class="tooltip"></div>');
	var $shape = $('.tooltip').append('<div class="shape"></div>');

})