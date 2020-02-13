//code copied from "https://www.sitepoint.com/community/t/pageyoffset-not-working-correctly/300109" and adjusted
var nav = $(".navbar")

window.addEventListener('scroll', function () {
  if (window.pageYOffset >= 200) {
            nav.addClass("scrolled");
        } else {
            nav.removeClass("scrolled");
        }
})
