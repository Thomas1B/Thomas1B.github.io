/*

JavaScript file to be shared among HTML files.

*/

$(document).ready(function () {

  $('.Navbar a').hover( // hover effect for Navbar links
    function () {
      $(this).css('opacity', 0.5);
    }, function () {
      $(this).css('opacity', 1);
    }
  )



});
