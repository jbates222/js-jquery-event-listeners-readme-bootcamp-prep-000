//define functions here

$(document).ready(function(){

getIt();
frameIt();
submitIt();

});

function getIt() {
  $("p").on('click', function() {
    alert("Hey!");
  });
}
function frameIt() {
  $('img').on('load', function() {
    $(this).addClass("tasty");
    $(this).css('border', "solid 2px red");
  });
}
function submitIt() {
  if (alert("Your form is going to be submitted now.")) {
    $("form").on("submit", function() {
  }
}