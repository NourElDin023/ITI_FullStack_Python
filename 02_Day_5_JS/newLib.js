//document.cookie = "name=ahmed; expires=Thu, 01 Jan 2025"
function addCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c[0] == " ") {
      c = c.slice(1);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.split("=")[1];
    }
  }
  console.log("Cookie does not exist.");
}

function checkCookie(name) {
  var cookie = getCookie(name);
  if (cookie != null) {
    console.log("Cookie exists!");
  }
}
