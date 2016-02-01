$(document).ready(function(){
    $("#register-now").click(function(){
        $(".tc-title").css("color", "#464e54");
        $(".tc-title").css("text-shadow", "0 0 0 black");
        $(".tc-nav-logo").css("fill", "#464e54");
        $(".hamburger .hamburger__icon").addClass("darken");
    });
});

$(document).ready(function(){
    $(".nav-color").click(function(){
        $(".tc-title").css("color", "#464e54");
        $(".tc-title").css("text-shadow", "0 0 0 black");
        $(".tc-nav-logo").css("fill", "#464e54");
        $(".hamburger .hamburger__icon").addClass("darken");
        $("body").removeClass("stop-scrolling");
    });
});

// Snipcart.execute('config', 'show_continue_shopping', true);
