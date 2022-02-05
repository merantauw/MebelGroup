$(function () {
  // icon search
  $("#search").on('click', function () {
    $(".menu-item").addClass('hide-item');
    $(".header__search-form").addClass('active');
    $(".header__box--left").addClass('active');
    $(".cross").addClass('active');
    $("#search").hide();
  })
  $(".cross").on('click', function () {
    $(".menu-item").removeClass('hide-item');
    $(".header__search-form").removeClass('active');
    $(".header__box--left").removeClass('active');
    $(".cross").removeClass('active');
    $("#search").show();
  })

  // sticky scroll header
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header__top-inner");
    header.classList.toggle("sticky", window.scrollY > 0)
  })

  // slider
  $(".slider__inner").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  });

  // Load more
  $('#loading').on('click', function () {
    $('#boxes .box:hidden').slice(0, 4).slideDown()
    if (($('#boxes .box:hidden')).length == 0) {
      $('#loading').fadeOut('slow')
    }
  });

  $('#newitemsloading').on('click', function () {
    $('#newboxes .box:hidden').slice(0, 4).slideDown()
    if (($('#newboxes .box:hidden')).length == 0) {
      $('#newitemsloading').fadeOut('slow')
    }
  });

  // Collections Slider
  $(".collections__inner").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: false
  });

  // Hamburger

  $('.hamburger').on('click', function () {
    $(this).toggleClass('on');
    $(".menu").toggleClass('active');
    $('.header__top').toggleClass('off');
  });

  // Sidebar
  $('ul.main-menu li').on('click', function (e) {
    e.preventDefault();

    if ($(this).siblings('li').find('ul.sidebar__submenu:visible').length) {
      $('ul.sidebar__submenu').slideUp('normal');
    }
    $(this).find('ul.sidebar__submenu').slideToggle('normal');
  });

  var t1 = new TimelineMax({
    paused: true
  });

  t1.to('.menu', 0.3, {
    autoAlpha: 1
  });

  t1.From(
    '.main-menu li a:not(.sidebar__submenu li a)',
    1, {
      opacity: 0,
      y: 10,
      ease: Power3.easeInOut
    },
    0.1
  );

  t1.from('.sidebar__submenu', 0.3, {
    autoAlpha: 0
  })

  t1.reverse();

  $(document).on('click', '.menu-btn', function () {
    t1.reversed(!t1.reversed());
  });

  $(document).on('click', '.close-menu', function () {
    t1.reversed(!t1.reversed());
  });

  
});
// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
