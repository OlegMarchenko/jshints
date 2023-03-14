

$('.cats-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});