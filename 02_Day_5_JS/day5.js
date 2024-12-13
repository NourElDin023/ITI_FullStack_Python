var currentIndex = 0;
var images = [];
var interval;
var speed = 3000;

var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");
var playButton = document.getElementById("playButton");
var stopButton = document.getElementById("stopButton");
var speed1xButton = document.getElementById("speed1xButton");
var speed2xButton = document.getElementById("speed2xButton");
var speed3xButton = document.getElementById("speed3xButton");

prevButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  displayImage();
});

nextButton.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  displayImage();
});

playButton.addEventListener("click", function () {
  interval = setInterval(function () {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    displayImage();
  }, speed);
});

stopButton.addEventListener("click", function () {
  clearInterval(interval);
});

speed1xButton.addEventListener("click", function () {
  speed = 6000;
  clearInterval(interval);
  playButton.click();
});

speed2xButton.addEventListener("click", function () {
  speed = 4000;
  clearInterval(interval);
  playButton.click();
});

speed3xButton.addEventListener("click", function () {
  speed = 2000;
  clearInterval(interval);
  playButton.click();
});

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/albums/1/photos", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    images = JSON.parse(xhr.responseText);
    displayImage();
  }
};

xhr.send();

function displayImage() {
  var container = document.querySelector(".taskOne");
  container.innerHTML = "";

  var img = document.createElement("img");
  img.src = images[currentIndex].url;
  img.style.width = "300px";

  var title = document.createElement("h3");
  title.textContent = images[currentIndex].title;

  container.appendChild(img);
  container.appendChild(title);
}
