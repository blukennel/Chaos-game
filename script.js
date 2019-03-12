var arr = [];
var resX = 1200;
var resY = 720;
var pos;
var dir;
var iteration = 0;
var size = 2;
var speed = 0.001;
var color = "green";
var r = 1.35;
var n = 6;
var instant = true;
var multipleColor = true;
var goal = 100000;

class point
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
	}
}
function print(text)
{
	document.getElementById("messageBox").innerHTML="| " + text;
}
function getPosition(event)
{
	var x = event.clientX-10;
	var y = resY-event.clientY+10;
	print("x: "+x+" y: "+y);
	add(new point(x,y));
	return new point(x,y);
}
function add(point)
{
	arr.push(point);
	drawCircle(point,"white");
	pos = point; 
}
function drawCircle(point,color)
{
	var c = document.getElementById("root");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(point.x, resY-point.y, size, 0, 2 * Math.PI);
	ctx.fillStyle = color;
	ctx.fill();
}
function middle(p1,p2)
{
	var vector = new point(0,0);
	var temp = new point(0,0);
	vector.x = (p2.x-p1.x)*r;
	vector.y = (p2.y-p1.y)*r;
	temp.x = p1.x + vector.x;
	temp.y = p1.y + vector.y;
	return temp;
}
function startSingle()
{
	dir = Math.floor(Math.random()*arr.length);

	if(multipleColor)
		color=assignColor(dir);

	if(instant)
	{
		for(i=0; i<goal; i++)
		{
			if(multipleColor)
			color=assignColor(dir);

			dir = Math.floor(Math.random()*arr.length);
			drawCircle(middle(pos,arr[dir]),color);
			pos=middle(pos,arr[dir]);
		}
		print("iteration: "+goal);
	}
	else
	{
		drawCircle(middle(pos,arr[dir]),color);
		pos=middle(pos,arr[dir]);
		setTimeout(startSingle,speed);
		iteration++;
		print("iteration: "+iteration);
	}
}
function ngon()
{
	drawGrid();
	var c = document.getElementById("root");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(resX/2, resY/2, 240, 0, 2 * Math.PI);
	ctx.stroke();

	var angle;
	var x,y;
	for(i=0; i<n; i++)
	{
		angle = i*2*Math.PI / n;
		x = 240 * Math.cos(angle);
		y = 240 * Math.sin(angle);
		add(new point(x+600,y+360));
	}
	startSingle();
}
function assignColor(arg)
{
	if(arg==0) return "red";
	else if(arg==1) return "green";
	else if(arg==2) return "blue";
	else if(arg==3) return "yellow";
	else if(arg==4) return "purple";
	else if(arg==5) return "aqua";
	else if(arg==6) return "orange";		
	else if(arg==7) return "brown";
	else if(arg==8) return "indigo";
	else if(arg==9) return "salmon";
	else if(arg==10) return "teal";
	else if(arg==11) return "lightcoral";
	else if(arg==12) return "lawngreen";
	return "white";
}
function drawGrid()
{
	var c = document.getElementById("root");
	var ctx = c.getContext("2d");
	for(i=1; i<resX/40; i++)
	{
		ctx.beginPath();
		ctx.moveTo(40*i, 0);
		ctx.lineTo(40*i, resY);
		ctx.stroke();
	}
	for(i=1; i<resY/40; i++)
	{
		ctx.beginPath();
		ctx.moveTo(0, 40*i);
		ctx.lineTo(resX, 40*i);
		ctx.stroke();
	}
}
