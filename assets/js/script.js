//code copied from "https://stackoverflow.com/questions/55360887/navbar-not-functioning-like-its-supposed-to" and adjusted
$(function() {
    var nav = $(".navbar");
    $(window).scroll(function() {    
        var scroll = window.pageYOffset;
    
        if (scroll >= 200) {
            nav.addClass("scrolled");
        } else {
            nav.removeClass("scrolled");
        }
    });
});
