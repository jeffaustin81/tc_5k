$(document).ready(function(){
    $("#register-now").click(function(){
        $(".tc-title").css("color", "#464e54");
        $(".tc-nav-logo").css("fill", "#464e54");
        $(".hamburger .hamburger__icon").addClass("darken");
    });
});

$(document).ready(function(){
    $(".nav-color").click(function(){
        $(".tc-title").css("color", "#464e54");
        $(".tc-nav-logo").css("fill", "#464e54");
        $(".hamburger .hamburger__icon").addClass("darken");
        $("body").removeClass("stop-scrolling");
    });
});
