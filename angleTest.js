var canvas = document.querySelector('canvas');
console.log(canvas)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// c abbreviation for content;
var c = canvas.getContext('2d');
// c.fillStyle='pink';
// c.fillRect(50,50,50,50);
// c.fillStyle='lightblue';
// c.fillRect(150,70,50,30);
// c.fillStyle='lightyellow';
// c.fillRect(250,110,60,50);
// c.fillStyle="lightgreen";
// c.fillRect(500,200,50,50);
// c.fillStyle='#F1ECDD';
// c.fillRect(350,130,70,50);

// title
c.fillStyle = 'yellow';
c.fillRect(172, 25, 210, 30);
c.fillStyle = 'black';
c.font = '25px serif';
c.fillText('c.arc(x,y,radius,startAngle,endAngle,clockwise)', 10, 50);

// radian formula
c.fillStyle = 'orange';
c.fillRect(280, 75, 160, 30);
c.fillStyle = 'black';
c.font = '28px serif';
c.fillText('radian is not degree,but π/180 * degree', 10, 100);

// startAngle endAngle range
c.font = '18px serif';
c.fillText('The range of startAngle/endAngle is approximately between 0 and 6.2831(2π)', 10, 140);

// add π text to canvas;
c.font = '30px serif';
c.fillStyle = 'black';
c.fillText('0π', 380, 410); // text:0π
c.fillText('1π', 70, 400); // text:1π
c.fillText('1.5π', 220, 250);// text:1.5π
c.fillText('2π', 360, 380);// text:2π
c.fillText('0.5π', 230, 570);// text:0.5π

// add π numbers to canvas;
c.font = '20px serif';
c.fillStyle = 'red';
c.fillText('0', 470, 410); // text:0 
c.fillText('3.14', 10, 400);// text:3.1415926
c.fillText('3.14+1.57', 220, 200);// text:1.5π
c.fillText('3.14+3.14', 400, 370);// text:2π
c.fillText('1.57', 230, 620);// text:0.5π

c.font = '20px serif';
c.fillStyle='brown';
c.fillText('clockwise:false',350,300);
c.fillText('clockwise:true',380,480);

// alert(Math.PI);
// draw lines
// c.beginPath();//separate the 2 units of drawing
// c.moveTo(200,400);
// c.lineTo(300,300);
// c.lineTo(500,300);
// c.strokeStyle='#B44F1A';
// c.stroke();//call function and start drawing

// draw arc
// c.arc(x,y,radius,startAngle,endAngle,clockwise);

// draw the central line:
c.beginPath();
c.moveTo(70, 400);
c.lineTo(450, 400);
c.strokeStyle = 'red';
c.lineWidth = 2;
c.stroke();

// draw the vertical line:
c.beginPath();
c.moveTo(250, 400);
c.lineTo(250, 600);
c.strokeStyle = 'red';
c.lineWidth = 2;
c.stroke();

// clockwise,true
c.beginPath();
c.lineWidth = 2;
c.strokeStyle = 'brown';
c.arc(250, 400, 140, 0.2, 1, false);
c.moveTo(350, 512);
c.lineTo(328, 516);
c.lineTo(330, 494);
c.stroke();

// clockwise,false
c.beginPath();
c.lineWidth = 2;
c.strokeStyle = 'brown';
c.arc(250, 400, 140, 5, 6, false);
c.moveTo(310, 260);
c.lineTo(292, 266);
c.lineTo(300, 284);
c.stroke();

// BLACK EXAMPLE
c.beginPath();
c.strokeStyle = 'black';
c.lineWidth = 21;
c.arc(250, 400, 100, 0.1, Math.PI, false);// or 3.1415926 
c.stroke();

// PINK EXAMPLE
c.beginPath();
c.lineWidth = 10;
c.arc(250, 400, 100, 0.3, Math.PI * 1.9, false);
c.strokeStyle = 'pink';
c.stroke();

// GREEN EXAMPLE
c.beginPath();
c.lineWidth = 30;
c.arc(250, 400, 100, 4.5, 5.5, false);
c.strokeStyle = 'green';
c.stroke();

// The formula example

c.fillText('(startAngle,endAngle) EXAMPLES:', 10, 650);
c.font = '18px serif';
c.fillStyle = 'black';
c.fillText('THE BLACK CURVE: (0.1,Math.PI) //degree from 5.73° to 180°', 30, 680);
c.fillText('formula: π/180*degree=0.1    degree: 0.1*180/π ≈ 5.73°', 30, 710);
c.fillStyle = 'hotpink';
c.fillText('THE PINK CURVE: (0.3,Math.PI*1.9) //degree from 60° to 342°', 30, 740);
c.fillText('formula: π/180*degree=0.3    degree: 0.3*180/π ≈ 17.19°', 30, 770);
c.fillStyle = 'green';
c.fillText('THE GREEN CURVE: (4.5,5.5) //degree from 257.83° to 315.13°', 30, 800);
c.fillText('formula: π/180*degree=4.5    degree: 4.5*180/π ≈ 257.83°', 30, 830);

// for loop to draw multi units
// for (var i=0;i<11;i++){
//     c.beginPath();
//     var x=Math.random()*window.innerWidth;
//     var y=Math.random()*window.innerHeight;
//     c.arc(x,y,50,30,31,false);
//     c.stroke();
// }

// var x=100;
// var radius=50;
// var xVl=1;
// function animate(){
//     requestAnimationFrame(animate);
// c.beginPath();
// c.lineWidth=10;
// c.clearRect(0,0,innerWidth,innerHeight);
// c.arc(x,500,50,0.1,6.1,false);
// c.strokeStyle='orange';
// c.stroke();
// x+=xVl;  
//  if(
//     x+radius>=window.innerWidth
//  ){xVl=-1;}else if(x-radius<=0){
//      xVl=1;
//  }
// }
// animate();
