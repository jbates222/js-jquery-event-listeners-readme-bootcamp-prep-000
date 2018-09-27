//define functions here

$(document).ready(function(){

getIt();
frameIt();
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