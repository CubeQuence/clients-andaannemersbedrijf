"use strict";
//Mobile Side nav
document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".sidenav");M.Sidenav.init(e,{edge:"right",draggable:!0})}),//Carousel
document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".carousel");M.Carousel.init(t,{fullWidth:!1,indicators:!0});setTimeout(function e(){M.Carousel.getInstance(t[0]).next(),setTimeout(e,6e3)},6e3)});
//# sourceMappingURL=init.js.map