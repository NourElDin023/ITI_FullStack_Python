// Task 1:
$(".container1 div").each(function () {
  $(this).css("background-color", $(this).attr("class"));
  $(this).find("p").css("color", $(this).find("p").attr("class"));
});
//----------------------------------------------------------------
// Task 2:
$(".container2 a[href*='google']").text("Google");
$(".container2 a[href$='org']").text("IEEE");
$(".container2 a[href^='https']").text("Facebook");
$(".container2 a[href^='http']").append(" Official Website");
//----------------------------------------------------------------
// Task 3:
$(".container3 figure:nth-child(3) img")
  .attr("src", "img/orange.png")
  .parent()
  .find("figcaption")
  .text("Fig.3 - Orange Juice");
//----------------------------------------------------------------
// Task 4:
$(".container4 td[class~='my-name']").css("color", "blue");
$(".container4 td:odd").css("background-color", "pink");
$(".container4 tr:last td:nth-child(2)").css("font-weight", "bold");
//----------------------------------------------------------------
// Task 5:
$(".container5 ul>li:nth-child(2)").css("font-style", "italic");
$(".container5 ol li:nth-child(2)").next().css("color", "red");
