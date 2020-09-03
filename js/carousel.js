$(document).ready(function() {
 

  
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 2000,
    dragThreshold: 0,
    breakpoints: {
      1023: {
        perView: 1,
      },
      400: {
      perView: 1,
      }
    }
  }).mount()


});