var canvas = document.querySelector('canvas')
console.log(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight
// c abbreviation for content;
var c = canvas.getContext('2d')
var mousePosition = {
  x: undefined,
  y: undefined
}
window.addEventListener('mousemove', function (event) {
  mousePosition.x = event.x
  mousePosition.y = event.y
  //console.log(mousePosition)
})
class Circle {
  constructor (x, y, xVl, yVl, radius) {
    this.x = x
    this.y = y
    this.xVl = xVl
    this.yVl = yVl
    this.radius = radius
  }

  drawCircle () {
    c.beginPath()
    c.arc(this.x, this.y, 50, 0.1, 6.1, false)
    c.lineWidth = 10
    c.strokeStyle = 'orange'
    c.stroke()
  }

  animateCircle () {
    if (
      this.x + this.radius >= innerWidth || this.x - this.radius <= 0
    ) {
      this.xVl = -this.xVl
    }
    if (
      this.y + this.radius >= innerHeight || this.y - this.radius <= 0
    ) {
      this.yVl = -this.yVl
    }
    this.x += this.xVl
    this.y += this.yVl
    // evaluate the distance between circle and mousemove
    if (mousePosition.x - this.x < 50) {
      console.log('到这卡住了')
    }
    this.drawCircle()
  }
}
var circles = []
for (var i = 0; i <= 50; i++) {
  var radius = 30
  var x = Math.random() * (innerWidth - radius * 2) + radius
  var y = Math.random() * (innerHeight - radius * 2) + radius

  var xVl = (Math.random() - 0.5) * 7
  var yVl = (Math.random() - 0.5) * 7
  var aCircle = new Circle(x, y, xVl, yVl, radius)
  circles.push(aCircle)
}
function animate () {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)
  for (var n = 1; n <= circles.length; n++) {
    circles[n].animateCircle()
  }
}
animate()
