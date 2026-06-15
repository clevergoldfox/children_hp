$(document).ready(function () {
  // owl-carousel
  var owl = $("#owl-slider-one");

  owl.owlCarousel({
    loop: true,
    margin: 40,
    nav: false, // Disable Owl default arrows
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    slideTransition: "linear",
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1.2,
        margin: 20,
      },
      768: {
        items: 2,
      },
      991: {
        items: 3.5,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Custom HTML buttons
  $(".custom-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".custom-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  // Header Active
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    if (scroll > 0) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  });

  // Back to top
  $(".back-to-top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 600);
  });
});

// Side Nav
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
