$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });

 $("#carouseInPage").click(function(){
    alert("info");

    $("#centerMain").empty();
    $("#centerMain").load("carousel.html");
 });

});