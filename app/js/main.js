$(function () {
  // icon search
  $("#search").on('click', function () {
    $(".menu-item").addClass('hide-item');
    $(".header__search-form").addClass('active');
    $(".cross").addClass('active');
    $("#search").hide();
  })
  $(".cross").on('click', function () {
    $(".menu-item").removeClass('hide-item');
    $(".header__search-form").removeClass('active');
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
    fade: true
  });

  // Load more
  $('#loading').on('click', function () {
    $('#boxes .box:hidden').slice(0, 4).slideDown()
      if(($('#boxes .box:hidden')).length == 0){
      $('#loading').fadeOut('slow')
    }
  });
});