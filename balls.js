var canvas = document.getElementById('canvas');
context=canvas.getContext('2d');
 context.fillStyle="black";
    context.fillRect(0,0,canvas.width,canvas.height);
context.fillStyle="white";

function blink(){
context.fillStyle="black";
context.font="30px Arial"; 
context.fillText('Happy Birthday',20,50);
context.fillText('Happy Birthday',20,110);
setTimeout("appear()",500);
}

function appear(){
context.fillStyle="skyblue";
context.font="30px Arial"; 
context.fillText('Happy Birthday',20,50);
context.fillText('Happy Birthday',20,110);
 setTimeout("blink()",500);
}


 



posX1=30; posY1=175; posX2=80; posY2=200;
posX3=130; posY3=225; posX4=180; posY4=200;
posX5=230; posY5=175;


setInterval(function(){
       posY1-=4; posY2-=4; posY3-=4; posY4-=4; posY5-=4;
     context.fillStyle="rgba(0,0,0,0.2)";
    context.fillRect(0,0,canvas.width,canvas.height);
    context.fillStyle="skyblue";
    context.beginPath();
    context.arc(posX1,posY1,5,0,2*Math.PI,false);
    context.fill();
    context.beginPath();
    context.arc(posX2,posY2,5,0,2*Math.PI,false);
    context.fill();
    context.beginPath();
    context.arc(posX3,posY3,5,0,2*Math.PI,false);
    context.fill();
    context.beginPath();
    context.arc(posX4,posY4,5,0,2*Math.PI,false);
    context.fill();
    context.beginPath();
    context.arc(posX5,posY5,5,0,2*Math.PI,false);
    context.fill();
  },30);

 appear();


setInterval(function(){
posX1=30; posY1=175; posX2=80; posY2=200;
posX3=130; posY3=225; posX4=180; posY4=200;
posX5=230; posY5=175;

setInterval(function(){
       posY1-=4; posY2-=4; posY3-=4; posY4-=4; posY5-=4;
     context.fillStyle="rgba(0,0,0,0.001)";
    context.fillRect(0,0,canvas.width,canvas.height);
    context.fillStyle="skyblue";
    context.beginPath();
    context.arc(posX1,posY1,5,0,2*Math.PI,false);
    context.fill();
    context.beginPath();
    context.arc(posX2,posY2,5,0,2*Math.PI,false);
    context.fill();
    context.beginPath();
    context.arc(posX3,posY3,5,0,2*Math.PI,false);
    context.fill();
    context.beginPath();
    context.arc(posX4,posY4,5,0,2*Math.PI,false);
    context.fill();
    context.beginPath();
    context.arc(posX5,posY5,5,0,2*Math.PI,false);
    context.fill();
  },100);
  },5000);






