(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true,
  duration: 100
});
autoplay()
function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 4500);
}
$(document).ready(function(){
  $('.modal').modal();
});
function showModal() {
  $('#modal_call').modal();
  $('#modal_call').modal('open');
}
$(function() {
  $('.owl-carousel.testimonial-carousel').owlCarousel({
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 2,
      }
    }
  });
});