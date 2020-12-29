// class canvasExample {
//   constructor(props) {
//     this.coords = [10, 10, 150, 100];
//     this.animationDir = 1;
//     this.fillColor = `green`;
//     this.canvas = document.createElement("canvas");
//     this.canvas.width = window.innerWidth * 0.75;
//     this.canvas.height = this.canvas.width / 2;
//     this.ctx = this.canvas.getContext("2d");
//   }
//   createCanvas() {
//     document.body.append(this.canvas);
//   }
//   drawSquare() {
//     this.ctx.fillStyle = this.fillColor;
//     this.ctx.fillRect(...this.coords);
//   }
//   updateSquare() {
//     this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));
//   }

//   clearSquare() {
//     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//   }

//   reverseAnimation() {
//     this.animationDir *= -1;
//   }

//   setColor(color) {
//     this.fillColor = color;
//     document.body.style.backgroundColor = color;
//     document.body.style.filter = `brightness(150%)`;
//   }
// }

// window.canvasExample = canvasExample;

// export default canvasExample;

export function createCanvas(el, pos) {
   let canvas = document.createElement("canvas");
   canvas.id = "canvas";
   canvas.classList.add('canvas');
   canvas.width = (window.innerWidth / 2.5);
   canvas.height = (window.innerHeight / 3);
   el.insertAdjacentElement(pos, canvas);
   return canvas;
}

export function updateCanvas(canvas, ctx, data, hue) {
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  draw(ctx, canvas, data, hue);
  hue += 1;
  // console.log(ctx, canvas, hue);
  requestAnimationFrame(updateCanvas);
}

function draw(ctx, canvas, data, hue, opacity = Math.random().toFixed(1)) {
  ctx.beginPath();
  let freqWidth = canvas.width * 1.0 / data.length;

  let pointX = 0;

  for (let i = 0; i < data.length; i++) {
    let v = data[i] / 86.0;
    let y = v * 200 / 2;

    if (i === 0) {
      ctx.moveTo(pointX, y);
    } else {
      ctx.lineTo(pointX, y);
    }

    pointX += freqWidth;
  }

  ctx.strokeStyle = `hsla(${hue}, 100%, 40%, ${opacity})`;
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.lineWidth = 2;
  ctx.stroke();
}