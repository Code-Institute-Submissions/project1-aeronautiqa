//code copied from "https://stackoverflow.com/questions/55360887/navbar-not-functioning-like-its-supposed-to" and adjusted
$(function () {
    $(window).pageYOffset(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', window.pageYOffset() > 100);
    });
});
