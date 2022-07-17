// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:false,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})