$(function() {
var firstHunt = $('#hint1');
var secondHunt = $('#hint2');
var thirdHunt = $('#hint3');


	$('#input1').hover(function() {
		firstHunt.css({visibility: 'visible'});
	}, 
	function() {
		firstHunt.css({visibility: 'hidden'});
	});

    $('#input2').hover(function() {
        secondHunt.css({visibility: 'visible'});
	}, 
	function() {
		secondHunt.css({visibility: 'hidden'});
	});

	$('#input3').hover(function() {
		thirdHunt.css({visibility: 'visible'});
	}, 
	function() {
		thirdHunt.css({visibility: 'hidden'});
	});
    
    $('#send').on('click', function(e) {
    e.preventDefault();

    firstHunt.css({visibility: 'hidden'});
    secondHunt.css({visibility: 'hidden'});
    thirdHunt.css({visibility: 'hidden'});

    if ($('#input1')[0].value === '') {
      firstHunt.css({visibility: 'visible'});
    }

    if ($('#input2')[0].value === '') {
      secondHunt.css({visibility: 'visible'});
    }

    if ($('#input3')[0].value === '') {
      thirdHunt.css({visibility: 'visible'});
    }
      });
})
