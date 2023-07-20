var circleCount = 0;

function increaseCircles() {
  circleCount++;
  document.getElementById("count").innerHTML = circleCount;
  drawCircles();
  setCookie("circleCount", circleCount, 30); // Установка срока действия в 30 сек
}

function decreaseCircles() {
  if (circleCount > 0) {
    circleCount--;
    document.getElementById("count").innerHTML = circleCount;
    drawCircles();
    setCookie("circleCount", circleCount, 30); // Установка срока действия в 30 сек
  }
}

function getCircleCount() {
  var count = getCookie("circleCount");
  if (count) {
    circleCount = parseInt(count); // Установка значения circleCount
  } else {
    circleCount = 3; // значение по умолчанию, если cookie не найден
  }
  document.getElementById("count").innerHTML = circleCount;
  console.log("Количество кругов из cookie:", circleCount); // Вывод количества кругов в консоль
  drawCircles(); // Вызов функции после установки значения circleCount
}

function drawCircles() {
  var circlesContainer = document.getElementById("circles");
  circlesContainer.innerHTML = "";
  for (var i = 0; i < circleCount; i++) {
    var circle = document.createElement("div");
    circle.classList.add("circle");
    circlesContainer.appendChild(circle);
  }
}

function setCookie(name, value, seconds) {
    var expires = "";
    if (seconds) {
      var date = new Date();
      date.setTime(date.getTime() + (seconds * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
function getCookie(name) {
  var nameEQ = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookies = decodedCookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(nameEQ) == 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

window.onload = function() {
  getCircleCount(); // Вызов функции для получения значения circleCount из cookie
}