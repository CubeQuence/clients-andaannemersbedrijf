//Mobile Side nav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:"right",draggable:!0});
});


//Carousel
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: false,
        indicators: true
    });

    setTimeout(carouselAutoTurn, 6000);

    function carouselAutoTurn() {
        var instance = M.Carousel.getInstance(elems[0]);
        instance.next();
        setTimeout(carouselAutoTurn, 6000);
    }

});
