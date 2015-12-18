function externalMenuHome() {
  var external = document.getElementById("splash");

  if (document.getElementById("splash").style['display'] == 'none') {
    $("#merch").hide();
    $("#merch-test").hide();
    $("#splash").fadeIn();
    $("#race-details").fadeIn();
    $("#about").fadeIn();
  }
}

function externalMenuRaceDetails() {
  var external = document.getElementById("race-details");

  if (document.getElementById("race-details").style['display'] == 'none') {
    $("#merch").hide();
    $("#merch-test").hide();
    $("#splash").fadeIn();
    $("#race-details").fadeIn();
    $("#about").fadeIn();
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
