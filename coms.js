let htmlLoaded = false;
window.addEventListener('load', function() {
  htmlLoaded = true;
  startUp();
  resizeCanvas();
  console.log("html loaded")
})
function startUp () {
  var canvas = document.getElementById("canvas")
  const ctx = canvas.getContext('2d');
  spawnParticles ()
  animate ();
}
window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
  console.log("resized")
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  let canvas = document.getElementById("canvas");
  canvas.style.height = screenHeight + "px";
  canvas.style.width = screenWidth + "px";
}


class Particles {
  constructor (x, y, ctx, dir, speed) {
    this.x = x;
    this.y = y;
    this.size = 5;
    this.ctx = ctx;
    this.dir = dir;
    this.mode = "bounce";
    this.speed = speed;
  }
  spawn () {
    this.ctx.fillStyle = "rgba(255,255,255,0.8)";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }
  update () {
    this.x += this.dir[0] == '+' ? this.speed[0] : -this.speed[1];
    this.y += this.dir[1] == '+' ? this.speed[2] : -this.speed[3];
    if(this.mode == "bounce"){
      if (this.x <= 0 || this.x >= this.ctx.canvas.width) {
        this.dir[0] = this.dir[0] === '+' ? '-' : '+';
      }
      if (this.y <= 0 || this.y >= this.ctx.canvas.height) {
        this.dir[1] = this.dir[1] === '+' ? '-' : '+';
      }
    } else {
      if ((this.x < 0 || this.x > this.ctx.canvas.width) || (this.y < 0 || this.y > this.ctx.canvas.height)) {
        this.x = this.resetProperties()[0];
        this.y = this.resetProperties()[1];
        this.dir = [(Math.random() < 0.5?"+":"-"), (Math.random() < 0.5?"+":"-")];
        function ra(arr) {
          const randomIndex = Math.floor(Math.random() * arr.length);
          return arr[randomIndex];
        }
        this.speed = [ra([1,2,3,4,5]),ra([1,2,3,4,5]),ra([1,2,3,4,5]),ra([1,2,3,4,5])]
      }
    }
  }
  newPos () {
    
  }
  resetProperties () {
    function ra(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
    const possibilities = [
        [Math.random() * this.ctx.canvas.height, this.ctx.canvas.width], // Right edge
        [Math.random() * this.ctx.canvas.height, 0],                    // Left edge
        [this.ctx.canvas.height, Math.random() * this.ctx.canvas.width], // Bottom edge
        [0, Math.random() * this.ctx.canvas.width]                       // Top edge
    ];
    return ra(possibilities);
  }
}
var particleCount = 250;
var particles = [];

function spawnParticles () {
  var canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  for(let i = 0; i < particleCount; i++){
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const dir = [(Math.random() < 0.5?"+":"-"), (Math.random() < 0.5?"+":"-")]
    function ra(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }
    let speed = [ra([1,2,3,4,5]),ra([1,2,3,4,5]),ra([1,2,3,4,5]),ra([1,2,3,4,5])]
    particles.push(new Particles(x, y, ctx, dir, speed));
  }
}

function animate () {
    var canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.spawn();
    });
    requestAnimationFrame(animate);
}
