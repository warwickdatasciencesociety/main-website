$(document).ready(function () {

  // $("#home").addClass(" animate__animated");
  // $("#home").addClass("animate__slideInRight");
  // setTimeout(function(){
  //   $("#home-title").addClass("animate__animated");
  //   $("#home-title").addClass("animate__fadeIn");

  // }, 100); 
  

  function getPageTitle(index) {
    switch (index) {
      case 1:
        $(".curr-title").fadeOut(function() {
          $(this).html("").fadeIn(500)
        });
        $("#wdss-logo").attr("src", "img/logo-transparent.png");
        break;
      case 2:
        $(".curr-title").fadeOut(function() {
          $(this).html("About Us").fadeIn(500)
        });
        $(".curr-title").removeClass("has-text-white");
        $("#wdss-logo").attr("src", "img/logo-transparent.png");
        break;
      case 3:
        $(".curr-title").fadeOut(function() {
          $(this).html("Core Values").fadeIn(500)
        });
        $(".curr-title").addClass("has-text-white");
        $("#wdss-logo").attr("src", "img/logo-transparent-white.png");
        break;
      case 4:
        $(".curr-title").fadeOut(function() {
          $(this).html("Ventures").fadeIn(500)
        });
        $(".curr-title").removeClass("has-text-white");
        $("#wdss-logo").attr("src", "img/logo-transparent.png");
        break;
      case 5:
        $(".curr-title").fadeOut(function() {
          $(this).html("Our Team").fadeIn(500)
        });  
        $(".curr-title").removeClass("has-text-white");
        $("#wdss-logo").attr("src", "img/logo-transparent.png");
        break;
      case 6:
        $(".curr-title").fadeOut(function() {
          $(this).html("Connect With Us").fadeIn(500)
        });
        $(".curr-title").addClass("has-text-white");
        $("#wdss-logo").attr("src", "img/logo-transparent-white.png");
        // $(".curr-title").addClass("is-3-mobile");
        break;
    };
  }
  var type = parseInt(window.location.hash.substr(1));
  getPageTitle(type);
  $(".test").click(function () {
    $(".curr-title").html($(this).html());
  })

  $("#homebtn").click(function () {
    $(".main").moveTo(1);
  });

  $("#about").click(function () {
    $(".main").moveTo(2);
  });

  $("#core").click(function () {
    $(".main").moveTo(3);
  });

  $("#ventures").click(function () {
    $(".main").moveTo(4);
  });

  $("#team").click(function () {
    $(".main").moveTo(5);
  });

  $("#contact").click(function () {
    $(".main").moveTo(6);
  });

  $(".dropbtn").click(function () {
    $(".dropdown-content2").slideToggle(200);
  });

  $(".main").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function (index) {
      getPageTitle(index);

    },  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function (index) { },   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
  });

});