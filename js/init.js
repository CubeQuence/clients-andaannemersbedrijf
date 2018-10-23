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

    function carouselAutoTurn() {
        var instance = M.Carousel.getInstance(elems[0]);
        instance.next();
    }

    setInterval(carouselAutoTurn, 6000);

});
