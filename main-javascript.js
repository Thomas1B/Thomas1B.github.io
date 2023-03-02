/*

JavaScript file to be shared among HTML files.

*/

$(document).ready(function() {

  $("#homeBtn").click(function() { // Function for home btn
    // (only used for smaller screen)
    window.location.href = "../HomePage/home.html";
  });

  $("#HomeBtn").click(function() { // Function for home btn on homepage.html
    // (only used for smaller screen)
    window.location.href = "home.html";
  });

  $("#MenuBtn").click(function() { // Function for toggling menu
    // (Only used for smaller screens)
    $("#MiniBarList").slideToggle();
  });

});
