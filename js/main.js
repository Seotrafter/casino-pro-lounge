(function ($) {
    "use strict";


    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarCollapse");

    if (toggleButton && navbarCollapse) {
        toggleButton.addEventListener("click", function () {
            const isExpanded = navbarCollapse.classList.contains("show");
            
            if (isExpanded) {
                navbarCollapse.classList.remove("show");
            } else {
                navbarCollapse.classList.add("show");
            }
        });
    }
});
