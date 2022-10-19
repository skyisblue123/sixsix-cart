/*商品收藏*/
$(document).ready(function () {
  $(".beforeheart").click(function () {
    $(this).addClass("active");
    $(this).parent().find(".afterheart").addClass("active");
  });
  $(".afterheart").click(function () {
    $(this).removeClass("active");
    $(this).parent().find(".beforeheart").removeClass("active");
  });
});

/*回到頂部*/
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $(".top").fadeIn();
  } else {
    $(".top").fadeOut();
  }
});

/*錨點*/
$(function () {
  $(‘a[href*=#]:not([href=#])’).click(function() {
      var target = $(this.hash);
      $(‘html,body’).animate({
          scrollTop: target.offset().top
      }, 1000);
      return false;
  });
});