// Toggle between disabling and enabling scrolling for web

$(document).ready(function(){
    $(".toggler").click(function(){
        $("body").toggleClass("stop-scrolling");
    });
});


// Disable scrolling for mobile
// $('body').bind('touchmove', function(e){e.preventDefault()})

// Enable scrolling for mobile
// $('body').unbind('touchmove')
