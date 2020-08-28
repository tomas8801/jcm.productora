$(document).ready(function() {

  setTimeout(function(){

    $('.preloader').fadeOut(2000);
  }, 6300)
   
});


window.sr = ScrollReveal()
sr.reveal('.caracteristica', {
    duration: 2000,
    origin: 'top',
    distance: '200px'
})

sr.reveal('.content_3 .info_box .two', {
    duration: 3000,
    origin: 'top',
    distance: '200px'
})

sr.reveal('.content_3 .info_box .three', {
    duration: 4000,
    origin: 'top',
    distance: '200px'
})

sr.reveal('.bio', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
    delay: 700
})

sr.reveal('.imagen img', {
    duration: 2000,
    origin: 'right',
    distance: '200px',
    delay: 700
})




//--------------------
$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


