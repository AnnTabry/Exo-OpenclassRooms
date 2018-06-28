$(function() {

    $('#first').hide();
    $('#two').hide();
    $('#three').hide();
    $('#img').hide();
    $('#image').hide();
    $('#son').off();


    $('h1').on('click', function() {
        $('#first').fadeIn('slow');
    });

    $('#first').on('click', function() {
        $('#two').fadeIn('slow');
    });

    $('#two').on('click', function() {
        $('#three').fadeIn('slow');
    });

    $('#three').on('click', function() {
        $('body').css('background-image', 'url("css/images/607.jpg")');
        $.playSound("0999.ogg")
        $('#first').html('Très');
        $('#two').html('bon');
        $('#three').html('anniversaire !!!');


    });

});
