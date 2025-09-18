$(document).ready(function () {

    var owl = $('.projects_contents');
    owl.owlCarousel({
        margin: 0,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        loop: true,
        responsive: {
            1440: { items: 3, center: true }
        }
    })

});

$(document).ready(function () {

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        loop: true,
        responsive: {
            0: { items: 2.5 }
        }
    })

});