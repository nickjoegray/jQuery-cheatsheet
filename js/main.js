$(document).ready(function() {
    // $('.navbar').fadeOut(3000);

    // $('.navbar').slideDown('slow');

    $('div').mouseenter(function(){
        $('.jumbotron').fadeTo('slow', 0.05);
    });

    // $('h2').fadeTo('fast', .10);

    // stores the result of a jQuery selector
    var $p = $('p');

    // $target = $('div:last-child');
    // $target.fadeOut('slow');

    // $('navbar').fadeIn(3000);

    // make class 'vanish' fade away on button click
    $('button').click(function() {
        $('.vanish').fadeOut('slow');
    });

    // select 2 elements using compound selector
    $('.pink, .red').fadeTo('slow', 0);

    // 'this' refers to the <p> you are clicking on
    $('p').click(function() {
        $(this).fadeOut('slow');
    });

    $('.pull-me').click(function(){
        $('.panel').slideToggle('slow');
    });

    $('body').prepend('<div class="row"><p>Im a paragraph</p></div>');

    $('.jumbotron').after('<section>This is a brand new section</section>');

    // move your <p> tag after the <div> with ID #one
    // create a new jQuery selector that targets the <div> with the id #two
    // using after again, select the <p> tag and move it after the <div> with id #two
    var $p = $('<p>This is a paragraph</p>');
    var $two = $('#two');
    $('#one').after($p);
    $($two).after($p);

    // deletes element and ALL ITS DECENDENTS
    // $('div').empty();

    // deletes element and its content
    // $('p').remove();

    $('footer').addClass('highlighted');

    $('.highlighted').height(100);
    $('.highlighted').width(100);
    $('.highlighted').css('border-radius', '10px');

    // will set content of <p> tag in DOM
    // $('div').html("jQuery is replacing this paragraph");

    // created a variable toAdd and set it to the contents of the input field
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        // append a div to the class list 
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });

    // check off items on our list of To Do's
    // on click event, look for all class.item's and remove
    $(document).on('click', '.item', function(){
        $('item').click(function(){
            $(this).remove();
        })
    });

    


});