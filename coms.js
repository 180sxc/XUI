let htmlLoaded = false;
window.addEventListener('load', function() {
  htmlLoaded = true;
  startUp();
  resizeCanvas();
})
function startUp () {
  var canvas = document.getElementById("canvas")
  const ctx = canvas.getContext('2d');
}
window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  let canvas = document.getElementById("canvas");
  canvas.style.height = window.innerWidth + "px";
  canvas.style.width = window.innerHeight + "px";
}
