$("#register-now").click(function(){
    $("#merch").fadeIn();
    $("#merch-test").fadeIn();
    $("#splash").hide(); // or .fadeIn(), etc.
    $("#race-details").hide();
    $("#about").hide();
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
