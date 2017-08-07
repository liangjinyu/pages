$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });

 $("#carouseInPage").click(function(){
    $("#centerMain").empty();
    $("#centerMain").load("carousel.html");
 });

});