$(document).ready(function(){
    $('.slideshow').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        mobileFirst: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                infinite: true,
                //dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              },
            },
            {
                breakpoint: 360,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                },
              }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
  });