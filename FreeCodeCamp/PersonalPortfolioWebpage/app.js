// Highlight the top nav as scrolling occurs
$('body').scrollspy({target: '.navbar-fixed-top'});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.scrollable').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});