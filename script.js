
function updateTime() {
  var time = dayjs().format('MMM D, YYYY, h:mm:ss a')
  $('#currentDay').text(time);
}
setInterval(updateTime, 1000);
  
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var input = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time, input);
});

$("#hour-9 .description").val(localStorage.getItem("9"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));

$(".time-block").each(function () {
var timeBlock = parseInt ($(this).attr("id").split("-")[1]);
var time = dayjs().hour() 
  // var time =12
  console.log (timeBlock)
  console.log (time)
  if (timeBlock < time) {
    $(this).addClass('past');
  } else if (timeBlock === time) {
    $(this).removeClass ('past')
    $(this).removeClass ('future')
    $(this).addClass ('present')
  } else {
    $(this).removeClass('past')
    $(this).removeClass('present')
    $(this).addClass('future')
    
  }
  
});


