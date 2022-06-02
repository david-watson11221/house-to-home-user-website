$(document).ready(function() {
  var loginCHeck = localStorage.getItem('isLogin');
  if(loginCHeck){
    $('.userhide123').show();
    $('.isLoggedIn').hide();
  } 
  else{

    $('.userhide123').hide();
    $('.isLoggedIn').show();    
  }


  $("#logout").click(function() {
    localStorage.removeItem('isLogin');
    window.location.href='./sign-in.php';
  });


});


$(document).ready(function() {
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function() {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
    });

    $('.loginUp').click(function(){
        $('.LoginPopup').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.signUp').click(function(){
        $('.signUpPop').fadeIn();
        $('.overlay').fadeIn();
    });

     $('.closePop,.overlay').click(function(){
        $('.popupMain').fadeOut();
        $('.overlay').fadeOut();
    });

});


// Fancy Media
$('.fancybox-media').fancybox({
    openEffect: 'none',
    closeEffect: 'none',
    helpers: {
        media: {}
    }
});


// Slider For
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true
});


// Accordion
$('.myaccordi>li').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});
//  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion


  // toggle password

$(".toggle_password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});



// Sticky Navigation
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".fixed").addClass("sticky");
    } else {
        $(".fixed").removeClass("sticky");
    }
});

// Normal Slider
$('.banner_slider').slick({
  dots: true,
  arrows:false,
  infinite: true,
  fade:true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// Normal Slider
$('.fproduct_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

// Normal Slider
$('.index-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});
            

// Navigation Menu 
$(window).on('load', function() {
var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
$('ul.menu li a').each(function() {
    var hrefVal = $(this).attr('href');
    if (hrefVal == currentUrl) {
        $(this).removeClass('active');
        $(this).closest('li').addClass('active')
        $('ul.menu li.first').removeClass('active');
    }
});

});

// Tabbing JS
  $('[data-targetit]').on('click', function(e) {
  $(this).addClass('current');
  $(this).siblings().removeClass('current');
  var target = $(this).data('targetit');
  $('.' + target).siblings('[class^="box-"]').hide();
  $('.' + target).fadeIn();
  $(".tab-slider").slick("setPosition");
});




// lottie start
$(document).ready(function() {
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('faqs'),
        path: 'assets/images/json/faqs.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('wishlist'),
        path: 'assets/images/json/wishlist.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('checkout_icon'),
        path: 'assets/images/json/checkout_icon.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('appointment_icon'),
        path: 'assets/images/json/appointment_icon.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('signup-login'),
        path: 'assets/images/json/signup-login.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('placeor_icon'),
        path: 'assets/images/json/place-order.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('forgot-password'),
        path: 'assets/images/json/forgot-password.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('review_icon'),
        path: 'assets/images/json/review_icon.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('rejection'),
        path: 'assets/images/json/rejection.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('profile'),
        path: 'assets/images/json/profile.json',
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
});



// lottie close

function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}

var input = document.querySelector("#phone");
window.intlTelInput(input, {
  separateDialCode: true
});




$(function () {
  $("#dshippinga").click(function () {
      if ($(this).is(":checked")) {
          $(".dshippingashow").fadeIn();
      } else {
          $(".dshippingashow").fadeOut();
      }
  });
});











/* RESPONSIVE JS */
if ($(window).width() < 825) {}
