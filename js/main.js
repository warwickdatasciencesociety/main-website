$(document).ready(function () {


  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {      
        hideAll();
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  function hideAll() {
    for (i = 0; i < acc.length; i++) {
      var panel = acc[i].nextElementSibling;
      panel.style.maxHeight = null;
      acc[i].classList.remove("active");
    }

  }
  function getPageTitle(index) {
    switch (index) {
      case 1:
        $(".curr-title").fadeOut(function() {
          $(this).html("").fadeIn(500)
        });
        $("#wdss-logo").attr("src", "img/logo-transparent-white.png");
        break;
      case 2:
        $(".curr-title").fadeOut(function() {
          $(this).html("Ventures").fadeIn(500)
        });
        $(".curr-title").removeClass("has-text-white");
        $("#wdss-logo").attr("src", "img/logo-transparent.png");
        break;
      case 3:
        $(".curr-title").fadeOut(function() {
          $(this).html("Values").fadeIn(500)
        });
        $("#wdss-logo").attr("src", "img/logo-transparent.png");
        break;
      case 4:
        $(".curr-title").fadeOut(function() {
          $(this).html("Our Team").fadeIn(500)
        });  
        $(".curr-title").removeClass("has-text-white");
        $("#wdss-logo").attr("src", "img/logo-transparent.png");
        break;
      case 5:
        $(".curr-title").fadeOut(function() {
          $(this).html("Contact Us").fadeIn(500)
        });
        $(".curr-title").addClass("has-text-white");
        $("#wdss-logo").attr("src", "img/logo-transparent-white.png");
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


  $("#ventures").click(function () {
    $(".main").moveTo(2);
  });

  $("#core").click(function () {
    $(".main").moveTo(3);
  });

  
  $("#team").click(function () {
    $(".main").moveTo(4);
  });

  $("#contact").click(function () {
    $(".main").moveTo(5);
  });

  $(".dropbtn").click(function () {
    $(".dropdown-content2").slideToggle(200);
  });
  var glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: false,
    dragThreshold: 1,
    breakpoints: {
      1023: {
        perView: 2,
      },
      760: {
      perView: 1,
      }
    }
  })
  
  $("#research-tile").hover(function() {
    

    $("#venture-research-contents").filter(':not(:animated)').fadeIn();
  }, function() {
    $("#venture-research-contents").fadeOut();
  });

  $("#teaching-tile").hover(function() {
    $("#venture-teaching-contents").filter(':not(:animated)').fadeIn();
   
  }, function() {
    $("#venture-teaching-contents").fadeOut();

  });

  $("#podcast-tile").hover(function() {
    $("#venture-podcast-contents").filter(':not(:animated)').fadeIn();
  }, function() {
    $("#venture-podcast-contents").fadeOut();
  });

  $("#careers-tile").hover(function() {
    $("#venture-careers-contents").filter(':not(:animated)').fadeIn();
  }, function() {
    $("#venture-careers-contents").fadeOut();
  });

  $("#social-good-tile").hover(function() {
    $("#venture-social-good-contents").filter(':not(:animated)').fadeIn();
  }, function() {
    $("#venture-social-good-contents").fadeOut();
  });






  $(".main").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 750,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function (index) {
      getPageTitle(index);
      if ($(".curr-title").text() == "Our Team") {
        glide.pause();
      }
      else {
        glide.play();
      }
    },  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function (index) { },   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
  });
  glide.mount();
 
  if ($(".curr-title").text() == "Our Team") {
    glide.pause();
  }
  else {
    glide.play();
  }
});