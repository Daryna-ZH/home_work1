$(function() {

$('#second').hide();
$('#third').hide();

$('#switchFirst').on('click', function() {
    $('#switchFirst').addClass('active');
    $('#switchSecond').removeClass('active');
    $('#switchThird').removeClass('active');

    $('#first').show();
    $('#second').hide();
    $('#third').hide();
});

$('#switchSecond').on('click', function() {
    $('#switchSecond').addClass('active');
    $('#switchFirst').removeClass('active');
    $('#switchThird').removeClass('active');

    $('#second').show();
    $('#first').hide();
    $('#third').hide();
});

 $('#switchThird').on('click', function() {
    $('#switchThird').addClass('active');
    $('#switchSecond').removeClass('active');
    $('#switchFirst').removeClass('active');

    $('#third').show();
    $('#second').hide();
    $('#first').hide();
});

})

