//code copied from "https://stackoverflow.com/questions/55360887/navbar-not-functioning-like-its-supposed-to" and adjusted
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 100);
    });
});
