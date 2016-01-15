$(".home-banner").click(function(){
    location.reload();
    window.scrollTo(0, 0);
});

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
