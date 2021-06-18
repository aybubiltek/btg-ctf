function modal(modal_name) {
  $(".modal-area." + modal_name).addClass("show");
}

$(".modal-close").click(function () {
  $(".modal-area").removeClass("show");
});

var c = 0;
$(".mobil-nav-btn").click(function () {
  $(this).toggleClass("close-nav");
  $(".mobil-nav").toggleClass("show");
  if (c == 0) {
    $("header").toggleClass("bg");
  }
});

$(".mobil-nav > .mobil-nav-list ul li a").click(function () {
  $(".mobil-nav").toggleClass("show");
  $(".mobil-nav-btn").toggleClass("close-nav");
});

$(function () {
  var header = $("header");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      header.addClass("bg");
      c = 1;
    } else {
      header.removeClass("bg");
      c = 0;
    }
  });
});


$(".s-logo-box.product .info").html("Ürün Sponsoru");
$(".s-logo-box.adv .info").html("Reklam Sponsoru");
$(".s-logo-box.technical .info").html("Teknik Sponsor");