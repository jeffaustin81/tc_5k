function hamburgerMenuHome() {

  if (document.getElementById("splash").style['display'] == 'none') {
    location.reload();
  }
}

function hamburgerMenuRegistration() {

  if (document.getElementById("splash").style['display'] == 'none') {
    window.scrollTo(0, 0);
    $("#splash").hide();
    $("#banners-1").hide();
    $("#banners-2").hide();
    $(".center-banner").hide();
    $("#history-page").hide();
    $("#race-details-page").hide();
    $("#tc15-page").hide();
    $("#registration-page").fadeIn();
  }
}

function externalMenuAbout() {
  var external = document.getElementById("about");

  if (document.getElementById("about").style['display'] == 'none') {
    $("#merch").hide();
    $("#merch-test").hide();
    $("#splash").fadeIn();
    $("#race-details").fadeIn();
    $("#about").fadeIn();
  }
}

function externalMenuMerch() {
  var external = document.getElementById("merch");

  if (document.getElementById("merch").style['display'] == 'none') {
    $("#merch").fadeIn();
    $("#merch-test").fadeIn();
    $("#splash").hide();
    $("#race-details").hide();
    $("#about").hide();
  }
}
