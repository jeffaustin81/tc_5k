$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($(".faq-list").css("padding-left") == "30px" ){
        // your code here
        
    }
}
