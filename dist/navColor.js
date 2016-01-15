$(document).ready(function(){
    $("#register-now").click(function(){
        $(".tc-title").css("color", "#464e54");
        $(".tc-nav-logo").css("fill", "#464e54");
        $(".hamburger .hamburger__icon").toggleClass("special");
        // $(".hamburger .hamburger__icon").css("background-color", "#464e54");
        // $(".hamburger .hamburger__icon:before").css("background-color", "#464e54");
        // $(".hamburger .hamburger__icon:after").css("background-color", "#464e54");
    });
});

$(document).ready(function(){
    $(".nav-color").click(function(){
        $(".tc-title").css("color", "#464e54");
        $(".tc-nav-logo").css("fill", "#464e54");
        $(".hamburger .hamburger__icon").addClass("special");
        // $(".hamburger .hamburger__icon:before").css("background-color", "#464e54");
        // $(".hamburger .hamburger__icon:after").css("background-color", "#464e54");
    });
});
