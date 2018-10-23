"use strict";
//Mobile Side nav
document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".sidenav");M.Sidenav.init(e,{edge:"right",draggable:!0})}),//Carousel
document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".carousel");M.Carousel.init(e,{fullWidth:!1,indicators:!0});setInterval(function(){M.Carousel.getInstance(e[0]).next()},6e3)});
//# sourceMappingURL=init.js.map