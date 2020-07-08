$(document).ready(function () {
  $('.your-class').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

function initMap() {
  var uluru = {
    lat: 50.4759432,
    lng: 30.6078467
  };
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 6,
      center: uluru
    });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}