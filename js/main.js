$(document).ready(function () {
  window.scrollTo(0,1);
  
  var dt = new Date();
  $("#copyright-year").html(dt.getFullYear());

  /**
   * switch between the exec cards and team cards
   * @param {If ran on page load} startup 
   * @param {html tag for either team or exec} elem 
   */
  function switchCards(startup, elem) {
    if (startup) {
      $('#ambassador-cards').css("display","none");
      return;
    }
    console.log($(elem).hasClass('is-selected-team'));
    if (!$(elem).hasClass('is-selected-team')) {
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
      glide_ambassadors.update();
    }else {
      $('#ambassador-cards').css("display","none");
      $('#exec-cards').css("display","block");
      glide.play();
      glide_ambassadors.pause();
      glide.update();
    }
  }
  $('.select-team').click(function() {
    switchCards(false, this);
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

      if ($(this).hasClass("active")) {
        this.classList.toggle("active");
        $(this).css("height", "70px");
      } else {      
        hideAll();        
        $(this).css("height", ($(this).prop('scrollHeight') + 10) + 'px');
        this.classList.toggle("active");

      
      }
    });
  }

  /**
   * hide all open accordians
   */
  function hideAll() {
    for (i = 0; i < acc.length; i++) {

      $(".accordion").css({height:"70px"});
      acc[i].classList.remove("active");
    }

  }
  
  /**
   * change the page title using an animation depending on the page index
   * @param {page index} index 
   */
  function getPageTitle(index) {
    switch (index) {
      case 1:
        $(".curr-title").fadeOut(function() {
          $(this).html("").fadeIn(500)
        });
        break;
      case 2:
        $(".curr-title").fadeOut(function() {
          $(this).html("Ventures").fadeIn(500)
        });
        $(".curr-title").removeClass("has-text-white");
        break;
      case 3:
        $(".curr-title").fadeOut(function() {
          $(this).html("Values").fadeIn(500)
        });
        $(".curr-title").removeClass("has-text-white");
        break;
      case 4:
        $(".curr-title").fadeOut(function() {
          $(this).html("Our Team").fadeIn(500)
        });  
        $(".curr-title").removeClass("has-text-white");
        break;
      case 5:
        $(".curr-title").fadeOut(function() {
          $(this).html("Contact Us").fadeIn(500)
          $(this).addClass("has-text-white")
        });
        
        break;
    };
  }

  /**
   * change the highlighted item on the menu, dependent on the page index
   * @param {page index} index 
   */
  function updateMenuHighlight(index) {
    switch (index) {
      case 1:
        $(".pagenav").removeClass("active_menu");  
        $("#homebtn").addClass("active_menu");
        break;
      case 2:
        $(".pagenav").removeClass("active_menu");  
        $("#venturesbtn").addClass("active_menu");
        break;
      case 3:
        $(".pagenav").removeClass("active_menu");  
        $("#core").addClass("active_menu");
        break;
      case 4:
        $(".pagenav").removeClass("active_menu");  
        $("#team").addClass("active_menu");
        break;
      case 5:
        $(".pagenav").removeClass("active_menu");  
        $("#contact").addClass("active_menu");
        break;
    };
  }

  /**
   * update the logo to be either colour or in white dependent on the 
   * background colour
   * @param {page index} index 
   */
  function updateLogo(index) {
    switch (index) {
      case 1:
        $("#wdss-logo").attr("src", "img/logo-transparent-white.png");
        break;
      case 2:
        $("#wdss-logo").attr("src", "img/logo-transparent.png");
        break;
      case 3:
        $("#wdss-logo").attr("src", "img/logo-transparent.png");
        break;
      case 4:
        $("#wdss-logo").attr("src", "img/logo-transparent.png");
        break;
      case 5:

        $("#wdss-logo").attr("src", "img/logo-transparent-white.png");
        break;
    };
  }

  var page_index = parseInt(window.location.hash.substr(1));
  getPageTitle(page_index);
  updateLogo(page_index);

  /**
   * Change to home page on menu click
   */
  $("#homebtn").click(function () {
    $(".main").moveTo(1);
  });

  /**
   * Change to ventures page on menu click
   */
  $("#venturesbtn").click(function () {
    $(".main").moveTo(2);
  });

  /**
   * Change to core values page on menu click
   */
  $("#core").click(function () {
    $(".main").moveTo(3);
  });

  /**
   * Change to team page on menu click
   */
  $("#team").click(function () {
    $(".main").moveTo(4);
  });

  /**
   * Change to contact page on menu click
   */
  $("#contact").click(function () {
    $(".main").moveTo(5);
  });

  
  var glide_ambassadors = new Glide('.glide-ambassador', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 5000,
    dragThreshold: 3,
    keyboard: false,
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
    autoplay: 5000,
    dragThreshold: 3,
    keyboard: false,
    breakpoints: {
      1023: {
        perView: 2,
      },
      760: {
      perView: 1,
      }
    }
  })



  glide_ambassadors.on('run.before', evt => {
    const scrollSteps = 3;
    if (evt.direction === '>') {
      evt.steps = -scrollSteps;
  } else if (evt.direction === '<') {
      evt.steps = scrollSteps;
  }
});

glide.on('run.before', evt => {
  const scrollSteps = 3;
  if (evt.direction === '>') {
    evt.steps = -scrollSteps;
} else if (evt.direction === '<') {
    evt.steps = scrollSteps;
}
});














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
    keyboard: false,
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

  /**
   * Remove gradient on top of image and display text
   */
  $("#research-tile").hover(function() {
    $("#venture-research-contents").filter(':not(:animated)').fadeIn(220);
    $("#research-tile-image").css("z-index", "50");
    blurImage("#research-image", 4, 1.05);
  }, function() {
    $("#venture-research-contents").fadeOut(220);
    $("#research-tile-image").css("z-index", "auto");
    blurImage("#research-image", 0, 1);
  });

  /**
   * Remove gradient on top of image and display text
   */
  $("#teaching-tile").hover(function() {
    $("#venture-teaching-contents").filter(':not(:animated)').fadeIn(220);
    $("#teaching-tile-image").css("z-index", "50");
    blurImage("#teaching-image", 4, 1.05);
  }, function() {
    $("#venture-teaching-contents").fadeOut(220);
    $("#teaching-tile-image").css("z-index", "auto");
    blurImage("#teaching-image", 0, 1);
  });


  /**
   * Remove gradient on top of image and display text
   */
  $("#podcast-tile").hover(function() {
    $("#venture-podcast-contents").filter(':not(:animated)').fadeIn(330);
    $("#podcast-tile-image").css("z-index", "50");
    blurImage("#podcast-image", 4, 1.05);
  }, function() {
    $("#venture-podcast-contents").fadeOut(330);
    blurImage("#podcast-image", 0, 1);
    $("#podcast-tile-image").css("z-index", "auto");
  });

  /**
   * Remove gradient on top of image and display text
   */
  $("#careers-tile").hover(function() {
    $("#venture-careers-contents").filter(':not(:animated)').fadeIn(220);
    $("#careers-tile-image").css("z-index", "50");
    blurImage("#careers-image", 4, 1.05);
  }, function() {
    $("#venture-careers-contents").fadeOut(220);
    blurImage("#careers-image", 0, 1);
    $("#careers-tile-image").css("z-index", "auto");
  });

  /**
   * Remove gradient on top of image and display text
   */
  $("#social-good-tile").hover(function() {
    $("#venture-social-good-contents").filter(':not(:animated)').fadeIn(220);
    blurImage("#social-good-image", 4, 1.05);
  }, function() {
    $("#venture-social-good-contents").fadeOut(220);
    blurImage("#social-good-image", 0, 1);
  });

  flag = false;


  $(".main").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 2500,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function (index) {

      getPageTitle(index)

      //attempt to vary the animationTime separately for the ventures page
      var targetSection = $(".main section").eq(index-1);
      var venturesSection = $("#ventures");
      var animationTime = (venturesSection.is(targetSection)) ? 11000 : 750;

      if ($(".curr-title").text() != "Our Team") {
        glide.pause();
        glide_ambassadors.pause();

      }
      else {
        glide.play();
        glide_ambassadors.play();

      }  
      
      if (index == "2" && !flag) {
      animateCSS('#research-tile-image', 'fadeInLeft');
      animateCSS('#teaching-tile-image', 'fadeInRight');
      animateCSS('#podcast-tile-image', 'fadeInLeft');
      animateCSS('#careers-tile-image', 'fadeInUp');
      animateCSS('#social-good-tile-image', 'fadeInRight');
      flag = true;
      }
      $(".active_menu").toggleClass("active_menu");
      if ($(".dropdown-content2").is(":visible")) {
        $(".dropdown-content2").slideUp(200);
      }
      console.log(animationTime)
      return animationTime;

    },  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function (index) { 
      updateLogo(index);
      updateMenuHighlight(index);
    },   // This option accepts a callback function. The function will be called after the page moves.
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
  
  if ($(".curr-title").text() != "Our Team") {
    glide.pause();
    glide_ambassadors.pause();
  }
  else {
    glide.play();
    glide_ambassadors.play();
  }
  switchCards(true, null);
  
});
$(".dropbtn, .pagenav").click(function () {
  $(".dropdown-content2").slideToggle(200);
});
var slideIndex = 1;
var teamIndex = 1;
var ambassadorIndex = 1;
showSlides(slideIndex);
showSlidesTeam(teamIndex);
showSlidesAmbassadors(ambassadorIndex);


/**
 * Change slide page viewer for core values
 * @param {number of slides} n 
 */
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

/**
 * Change slide page viewer for exec
 * @param {number of slides} n 
 */
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

/**
 * Change slide page viewer for ambassadors
 * @param {number of slides} n 
 */
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

function blurImage(image, blurStrength, scaleAmount) {
  let blur = "blur("+blurStrength+"px)";
  let scale = "scale("+scaleAmount+")";

  $(image).css({
    "filter": blur,
    "transition":'0.33s',
    'webkit-transition':'0.33s',
    '-moz-transition': '0.33s',
    'transform': scale,
  });
}
