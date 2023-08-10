var userName = document.getElementById("userName");
var age = document.getElementById("age");
var address = document.getElementById("address");
var btn = document.getElementById("save");

btn.addEventListener("click", function () {
  var dataa = window.open("data.html");
  setCookie("userName", userName.value);
  setCookie("age", age.value);
  setCookie("address", address.value);

  var cookies = getCookie().split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var parts = cookies[i].split("=");
    dataa.document.writeln(parts[0] + " " + parts[1] + "<br>");
  }
});
