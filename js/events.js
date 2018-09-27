//define functions here

$(document).ready(function(){

getIt();

});

function getIt() {
  $("p").on('click', function() {
    alert("Hey!");
  });
}
function frameIt() {
  $('.tasty').on('load', function() {
    $(this).css('border', "solid 2px red");
  });
}