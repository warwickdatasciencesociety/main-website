$(document).ready(function () {
  // $('#ambassador-cards').css('display', 'none');
  function switchCards(startup) {
    if (startup) {
      $('#ambassador-cards').css("display","none");
      return;
    }
    if (!$(this).hasClass('is-selected-team')) {
      $('#display-exec').toggleClass('is-selected-team');
      $('#display-exec').toggleClass('is-hidden-team');
      $('#display-ambassadors').toggleClass('is-selected-team');
      $('#display-ambassadors').toggleClass('is-hidden-team');
      

    }
    if (!$('#display-exec').hasClass('is-selected-team')) {
      $('#exec-cards').css("display","none");
      $('#ambassador-cards').css("display","block");
      glide.pause();
      glide_ambassadors.play();
    }else {
      $('#ambassador-cards').css("display","none");
      $('#exec-cards').css("display","block");
      glide.play();
      glide_ambassadors.pause();
      
    }
  }
  $('.select-team').click(function() {
    switchCards(false);
  });
  $('.pagenav').click(function(event){
    event.preventDefault();
  });
  

  const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd);
  });


  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

      // var panel = this.nextElementSibling;
      console.log(this.classList);

      console.log($(this).hasClass("active"));
      console.log(this.classList);
      if ($(this).hasClass("active")) {
        // panel.style.maxHeight = null;
        // $(this).animate({height:"70px"});
        console.log("hgere");      this.classList.toggle("active");

        $(this).css("height", "70px");
      } else {      
        hideAll();
        
        // panel.style.maxHeight = panel.scrollHeight + "px";
        
        $(this).css("height", ($(this).prop('scrollHeight') + 10) + 'px');
        this.classList.toggle("active");

      
      }
    });
  }

  function hideAll() {
    for (i = 0; i < acc.length; i++) {
      // var panel = acc[i].nextElementSibling;
      // panel.style.maxHeight = null;

      $(".accordion").css({height:"70px"});
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
  var glide_ambassadors = new Glide('.glide-ambassador', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 4500,
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

  var glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 4500,
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

  glide.on('run', function(e) {
    if (e.direction == "<") {
      showSlidesTeam(teamIndex-=1);
    }
    else {
      showSlidesTeam(teamIndex+=1);
    }
  })

  glide_ambassadors.on('run', function(e) {
    if (e.direction == "<") {
      showSlidesAmbassadors(ambassadorIndex-=1);
    }
    else {
      showSlidesAmbassadors(ambassadorIndex+=1);
    }
  })
  
  var glide_values = new Glide('.glide-values', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 4500,
    dragThreshold: 1,
    breakpoints: {
      1023: {
        perView: 2,
      },
      760: {
      perView: 1,
      }
    },
    
  });
  glide_values.on('run', function(e) {
    if (e.direction == "<") {
      showSlides(slideIndex-=1);
    }
    else {
      showSlides(slideIndex+=1);
    }
  })

  $("#research-tile").hover(function() {
    

    $("#venture-research-contents").filter(':not(:animated)').fadeIn(220);
  }, function() {
    $("#venture-research-contents").fadeOut(220);
  });

  $("#teaching-tile").hover(function() {
    $("#venture-teaching-contents").filter(':not(:animated)').fadeIn(220);
    // $("#venture-teaching-contents").css('display', 'block')

  }, function() {
    $("#venture-teaching-contents").fadeOut(220);
    // $("#venture-teaching-contents").css('display', 'none')

  });

  $("#podcast-tile").hover(function() {
    $("#venture-podcast-contents").filter(':not(:animated)').fadeIn(220);
  }, function() {
    $("#venture-podcast-contents").fadeOut(220);
  });

  $("#careers-tile").hover(function() {
    $("#venture-careers-contents").filter(':not(:animated)').fadeIn(220);
  }, function() {
    $("#venture-careers-contents").fadeOut(220);
  });

  $("#social-good-tile").hover(function() {
    $("#venture-social-good-contents").filter(':not(:animated)').fadeIn(220);
  }, function() {
    $("#venture-social-good-contents").fadeOut(220);
  });

  flag = false;

  $(".main").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 750,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function (index) {
      getPageTitle(index);
      if ($(".curr-title").text() == "Our Team") {
        glide.pause();
      }
      else {
        glide.play();
      }  
      
      if (index == "2" && !flag) {
      animateCSS('#research-tile-image', 'fadeInDown');
      animateCSS('#teaching-tile-image', 'fadeInRight');
      animateCSS('#podcast-tile-image', 'fadeInLeft');
      animateCSS('#careers-tile-image', 'fadeInUp');
      animateCSS('#social-good-tile-image', 'fadeInRight');
      flag = true;
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

  glide_ambassadors.mount();
  glide.mount();
  glide_values.mount();
  if ($(".curr-title").text() == "Our Team") {
    glide.pause();
  }
  else {
    glide.play();
  }
  switchCards(true);
});

var slideIndex = 1;
var teamIndex = 1;
var ambassadorIndex = 1;
showSlides(slideIndex);
showSlidesTeam(teamIndex);
showSlidesAmbassadors(ambassadorIndex);



function showSlides(n) {
  var i;
  var dots = document.getElementsByClassName("dot");
  if (n > dots.length) {slideIndex = 1}
  if (n < 1) {slideIndex = dots.length}

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" glide-active", "");
  }
  dots[slideIndex-1].className += " glide-active";
}


function showSlidesTeam(n) {
  var i;
  var dots = document.getElementsByClassName("dot-team");
  if (n > dots.length) {teamIndex = 1}
  if (n < 1) {teamIndex = dots.length}

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" glide-active", "");
  }
  dots[teamIndex-1].className += " glide-active";
}

function showSlidesAmbassadors(n) {
  var i;
  var dots = document.getElementsByClassName("dot-team-ambassador");
  if (n > dots.length) {ambassadorIndex = 1}
  if (n < 1) {ambassadorIndex = dots.length}

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" glide-active", "");
  }
  dots[ambassadorIndex-1].className += " glide-active";
}
