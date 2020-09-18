// Scroll To Top
var $window = $(window);
$window.on("scroll", function () {
  // Scroll To Top
  if ($(this).scrollTop() > 400) {
    $(".scroll-top").removeClass("not-visible");
  } else {
    $(".scroll-top").addClass("not-visible");
  }
});
$("body").on("click", ".scroll-top", function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".homeSlider").slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    dots: true,
    arrows: true,
    slide: ".homeSlider .slick-slideshow__slide",
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "140px",
    responsive: [
      {
        breakpoint: 997,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 360,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
