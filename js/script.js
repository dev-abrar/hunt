$(function () {
    // menu_fix 
    var menu = $('.navbar').offset().top;
    $(window).scroll(function () {
      var scroll = $(this).scrollTop();
  
      if (menu < scroll) {
        $('.navbar').addClass('menu_fix');
      } else {
        $('.navbar').removeClass('menu_fix');
      }
    });
  
    // bt_top
    $('.bt_top').click(function () {
      $('html, body').animate({
        scrollTop: 0,
      }, 1500);
    });
    $(window).scroll(function () {
      var abc = $(this).scrollTop();
  
      if (abc > 200) {
        $('.bt_top').fadeIn();
      } else {
        $('.bt_top').fadeOut();
      }
    });
  
    // banner_slider
    $('.main_banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      speed: 1500,
      arrows: true,
      prevArrow: '<i class="fa-solid fa-arrow-left prev_arrow"></i>',
      nextArrow: '<i class="fa-solid fa-arrow-right nxt_arrow"></i>',
    });
    // service slider
    $('.ser_row').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      arrows: true,
      prevArrow: '.ser_top_btn',
      nextArrow: '.ser_bttm_btn',
      vertical: true,
      centerMode: true,
      centerPadding: '0px',
      responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
            centerMode: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
      ]
    });
  
    // comment slider
  
    $('.main_comment').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      speed: 1500,
      arrows: true,
      prevArrow: '.comment_top_btn',
      nextArrow: '.comment_bttm_btn',
      vertical: true,
      centerMode: true,
      centerPadding: '0px',
      autoplay: true,
      asNavFor: '.comment_slider',
      responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
      ]
    });
  
    $('.comment_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      speed: 1500,
      arrows: false,
      autoplay: true,
      vertical: true,
      asNavFor: '.main_comment',
      responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
      ]
    });
  
    // counter up
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  
    // plan slider
    $('.plan_row').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
      ]
    });
  
    // partner slider
    $('.part_row').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
            centerMode: false,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
            centerMode: true,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
            centerMode: false,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
            centerMode: false,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 470,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
      ]
    });
  
    // team slider
    $('.t_row').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
            centerMode: false,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
            centerMode: false,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
            centerMode: false,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
      ]
    });
  
    // veno box
    new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'pulse',
    });
    $('.show').on('click', function () {
      $('.main_menu').css('left', '0');
    })
    $('.hide').on('click', function () {
      $('.main_menu').css('left', '-100%');
    })
  })
  
  // scrollspy-js
  //scroll-spy & Smooth-scrolling
  
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 40
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 120;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
  
// preeloader-js
$(window).load(function () {
  $('#hola').delay(300).fadeOut(300);
});