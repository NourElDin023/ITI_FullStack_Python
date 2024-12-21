// Task 1:
$(".container1").append('<div class="black">Black</div>');
$(".container1").prepend('<div class="white">White</div>');
$(".container1 .pink").before('<p class="yellow">Yellow</p>');
//----------------------------------------------------------------
// Task 2:
$(".container2 p").each(function () {
  $(this).replaceWith(
    `<a href="http://${$(this).text()}">${$(this).text()}</a>`
  );
});
//----------------------------------------------------------------
// Task 3:
$(".container3 img").wrap("<figure></figure>");
$(".container3 figure").append("<figcaption>Coffee</figcaption>");
//----------------------------------------------------------------
// Task 4:
$(".container4 .col-age").empty();
$(".container4 td:contains('Mohsen')").addClass("man");
$(".container4 td").toggleClass("your-email");
// Bonus, more that more than two steps:
// $(".container4 td").each(function () {
//   if ($(this).hasClass("your-email")) {
//     $(this).removeClass("your-email");
//   } else {
//     $(this).addClass("your-email");
//   }
// });
//----------------------------------------------------------------
// Task 5 Bonus:
$(".container5 li")
  .filter(function (index) {
    if (index != 0) {
      return index % 3 === 0;
    }
  })
  .css("background-color", "yellow");
//----------------------------------------------------------------
// Task 6:
$(".container6 input[name='username']").val("NourElDin");
$(".container6 #remember").prop("checked", true);
