class point
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
	}
}

var resX = 600;
var resY = 600;
var A = new point(100,100);
var B = new point(500,100);
var C = new point(300,500);
var pos = new point(300,300);

function print(text)
{
	document.getElementById("messageBox").innerHTML="| " + text;
}

function getPosition(event)
{
	var x = event.clientX;
	var y = event.clientY;
	print("x: "+x+" y: "+y);
	return new point(x,y);
}

function drawCircle(point)
{
	var c = document.getElementById("root");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(point.x, resY-point.y, 2, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#FF0000";
	ctx.fill();
}

function middle(p1,p2)
{
	var vector = new point(0,0);
	var temp = new point(0,0);
	vector.x = (p2.x-p1.x)/2;
	vector.y = (p2.y-p1.y)/2;
	temp.x = p1.x + vector.x;
	temp.y = p1.y + vector.y;
	return temp;
}

function start()
{
	drawCircle(A);
	drawCircle(B);
	drawCircle(C);
	var dir;

	for(i=0; i<20000; i++)
	{
		dir = Math.floor(Math.random()*4);
		if(dir == 0)
		{
			drawCircle(middle(pos,A));
			pos=middle(pos,A);
		}
		if(dir == 1)
		{
			drawCircle(middle(pos,B));
			pos=middle(pos,B);
		}
		if(dir == 2)
		{
			drawCircle(middle(pos,C));
			pos=middle(pos,C);
		}
	}
}
