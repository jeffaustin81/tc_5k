$(".home-banner").click(function(){
    location.reload();
    window.scrollTo(0, 0);
});

$(".fat-nav").click(function(){
    // $(".hamburger.toggler").toggleClass("active");
    // window.scrollTo(0, 0);
});

// REGISTER NOW BUTTON

$("#register-now").click(function(){
    window.scrollTo(0, 0);
    $("#splash").hide();
    $("#banners-1").hide();
    $("#banners-2").hide();
    $("#center-banner").hide();
    $("#history-page").hide();
    $("#race-details-page").hide();
    $("#tc15-page").hide();
    $("#donate-page").hide();
    $("#registration-page").fadeIn();
});

// BANNERS

$(".registration-banner").click(function(){
    window.scrollTo(0, 0);
    $("#splash").hide();
    $("#banners-1").hide();
    $("#banners-2").hide();
    $("#center-banner").hide();
    $("#history-page").hide();
    $("#race-details-page").hide();
    $("#tc15-page").hide();
    $("#donate-page").hide();
    $("#registration-page").fadeIn();
});

$(".history-banner").click(function(){
    window.scrollTo(0, 0);
    $("#splash").hide();
    $("#banners-1").hide();
    $("#banners-2").hide();
    $("#center-banner").hide();
    $("#registration-page").hide();
    $("#race-details-page").hide();
    $("#tc15-page").hide();
    $("#donate-page").hide();
    $("#history-page").fadeIn();
});

$(".race-details-banner").click(function(){
    window.scrollTo(0, 0);
    $("#splash").hide();
    $("#banners-1").hide();
    $("#banners-2").hide();
    $("#center-banner").hide();
    $("#registration-page").hide();
    $("#history-page").hide();
    $("#tc15-page").hide();
    $("#donate-page").hide();
    $("#race-details-page").fadeIn();
});

$(".tc15-banner").click(function(){
    window.scrollTo(0, 0);
    $("#splash").hide();
    $("#banners-1").hide();
    $("#banners-2").hide();
    $("#center-banner").hide();
    $("#registration-page").hide();
    $("#history-page").hide();
    $("#race-details-page").hide();
    $("#donate-page").hide();
    $("#tc15-page").fadeIn();
});

$(".donate-banner").click(function(){
    window.scrollTo(0, 0);
    $("#splash").hide();
    $("#banners-1").hide();
    $("#banners-2").hide();
    $("#center-banner").hide();
    $("#registration-page").hide();
    $("#history-page").hide();
    $("#race-details-page").hide();
    $("#tc15-page").hide();
    $("#donate-page").fadeIn();
});

// MERCH ITEMS

$(".adult-reg-product").click(function(){
    window.scrollTo(0, 0);
    $(".reg-photo").hide();
    $(".merch-items").hide();
    $(".external-page-title").hide();
    $(".adult-reg-details").fadeIn();
});

$(".student-reg-product").click(function(){
    window.scrollTo(0, 0);
    $(".reg-photo").hide();
    $(".merch-items").hide();
    $(".external-page-title").hide();
    $(".student-reg-details").fadeIn();
});

$(".shirt-product").click(function(){
    window.scrollTo(0, 0);
    $(".reg-photo").hide();
    $(".merch-items").hide();
    $(".external-page-title").hide();
    $(".shirt-details").fadeIn();
});

$(".koozie-product").click(function(){
    window.scrollTo(0, 0);
    $(".reg-photo").hide();
    $(".merch-items").hide();
    $(".external-page-title").hide();
    $(".koozie-details").fadeIn();
});

$(".adult-reg-back").click(function(){
    window.scrollTo(0, 0);
    $(".adult-reg-details").hide();
    $(".reg-photo").fadeIn();
    $(".merch-items").fadeIn();
    $(".external-page-title").fadeIn();
});

$(".student-reg-back").click(function(){
    window.scrollTo(0, 0);
    $(".student-reg-details").hide();
    $(".reg-photo").fadeIn();
    $(".merch-items").fadeIn();
    $(".external-page-title").fadeIn();
});

$(".shirt-back").click(function(){
    window.scrollTo(0, 0);
    $(".shirt-details").hide();
    $(".reg-photo").fadeIn();
    $(".merch-items").fadeIn();
    $(".external-page-title").fadeIn();
});

$(".koozie-back").click(function(){
    window.scrollTo(0, 0);
    $(".koozie-details").hide();
    $(".reg-photo").fadeIn();
    $(".merch-items").fadeIn();
    $(".external-page-title").fadeIn();
});
