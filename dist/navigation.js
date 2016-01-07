$("#register-now").click(function(){
    $("#merch").hide();
    $("#merch-mobile").fadeIn();
    $("#merch-test").fadeIn();
    $("#splash").hide(); // or .fadeIn(), etc.
    $("#race-details").hide();
    $("#about").hide();
    $("#race-details-mobile").hide();

    $("#social-mobile").hide();

});

$("#race-details-mobile-link").click(function(){
    window.scrollTo(0, 0);
    $("#race-details").fadeIn();
    // $("#map").fadeIn();
    $("#splash").hide(); // or .fadeIn(), etc.
    $("#merch").hide();
    $("#merch-test").hide();
    $("#about").hide();
    // $("#race-details-mobile").hide();
    $("#merch-mobile").hide();
    $("#social-mobile").hide();

});

$("#merch-mobile-link").click(function(){
    window.scrollTo(0, 0);
    $("#merch").hide();
    $("#merch-mobile").fadeIn();
    $("#merch-test").fadeIn();
    $("#splash").hide(); // or .fadeIn(), etc.
    $("#race-details").hide();
    $("#about").hide();
    $("#race-details-mobile").hide();

    $("#social-mobile").hide();

});

$("#about-link").click(function(){
    window.scrollTo(0, 0);
    $("#merch").hide();
    $("#merch-test").hide();
    $("#splash").hide(); // or .fadeIn(), etc.
    $("#race-details").hide();
    $("#about").fadeIn();
    $("#race-details-mobile").hide();
    $("#merch-mobile").hide();
    $("#social-mobile").hide();

});


// $(document).ready(function(){
//   $("#register-now").click(function() {
//     $("#splash").hide();
//   )}
// });


// function navigate() {
//   var splash = document.getElementById("splash");
//   var details = document.getElementById("race-details");
//   var about = document.getElementById("about");
//   var merch = document.getElementById("merch");
//
//     splash.style.visibility = "hidden";
//     splash.style.display = "none";
//
//     details.style.visibility = "hidden";
//     details.style.display = "none";
//
//     about.style.visibility = "hidden";
//     about.style.display = "none";
//
//     merch.style.visibility = "visible";
//     merch.style.display = "inline";
