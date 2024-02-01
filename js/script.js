$(document).ready(function() {
    // Menü-Click-Ereignis
    $('#menu').click(function() {
        $(this).toggleClass('fa-times'); // Toggle-Klasse für das Menü-Symbol und Hinzufügen der Klasse "white"
        $('header').toggleClass('toggle'); // Toggle-Klasse für den Header
    });

    // Scroll- und Ladeereignis
    $(window).on('scroll load', function() {
        // Bei Scrollen oder Laden, Klassen entfernen
        $('#menu').removeClass('fa-times'); // Klasse für das Menü-Symbol entfernen
        $('header').removeClass('toggle'); // Klasse für den Header entfernen
        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // Download-link
    function openNewWindow() {
        window.open("https://aliweb23.github.io/haschimi-portfolio/");
    }
});
