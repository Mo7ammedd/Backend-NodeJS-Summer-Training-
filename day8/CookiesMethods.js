function setCookie(key, value, date) {
  var date = new Date();
  date.setDate(20);
  document.cookie = key + "=" + value + ";expires=" + date.toUTCString();
}

function getCookie() {
  return document.cookie;
}
