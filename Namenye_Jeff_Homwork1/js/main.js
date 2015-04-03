/*
     Name:Jeff Namenye	
     Date:4/1/15
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
*/

if(Modernizr.canvas){
    console.log("Canvas is Supported")
}
/*
/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

window.onload = function() {
	var theCanvas = document.getElementById('Part1');
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if (ctx) {
			ctx.strokeStyle = "black";
			ctx.fillStyle = "blue";
			ctx.lineWidth = 2;

			ctx.fillRect(0,0,50,100);
			ctx.strokeRect(0,0,50,100);
			
		}
	}
}
console.log("test");


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here



	var theCanvas = document.getElementById('Part2');
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if (ctx) {
            ctx.strokeStyle = "black";
            ctx.fillStyle = "red";
            ctx.lineWidth = 2;

            var degrees = 360;
            var radians = (degrees/180)*Math.PI;

            ctx.beginPath();
            ctx.arc(50,50,20,0,radians)
            ctx. stroke();
            ctx.closePath();
            ctx. fill();
		}
	}



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here


	var theCanvas = document.getElementById('Part3');
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if (ctx) {
            ctx.fillStyle = "blue";

            ctx.beginPath();

            ctx.moveTo(100, 0.0);

            ctx.lineTo(140, 70);

            ctx.lineTo(200, 75);

            ctx.lineTo(160, 125);

            ctx.lineTo(170, 200);

            ctx.lineTo(100, 165);

            ctx.lineTo(40, 200);

            ctx.lineTo(50, 125);

            ctx.lineTo(0.0, 75);

            ctx.lineTo(75, 70);

            ctx.lineTo(100, 0.0);

            ctx.closePath();

            ctx.fill();



        }
	}


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here


	var theCanvas = document.getElementById('Part4');
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if (ctx) {

            ctx.strokeStyle= "blue";
            ctx.fillStyle = "red";
            ctx.lineWidth = 5;

            ctx.beginPath();
            ctx.arc(200,150,100, 0,1 * Math.PI, false);
            ctx.stroke();
		}
	}


/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here


	var theCanvas = document.getElementById('Part5');
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if (ctx) {

            var theString = "This is my text for this project";


            ctx.fillText(theString, 10,10);


            ctx.font="20pt Georgia";
            ctx.fillStyle = "blue";
            ctx.strokeStyle = "rgba(5, 155, 30, .5)";
            ctx.fillText(theString, 20, 160);
            ctx.strokeText(theString, 20, 160);


        }
	}


/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here


	var theCanvas = document.getElementById('Part6');
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if (ctx) {

            var  srcImg = document.getElementById("logo");
            ctx.drawImage(srcImg, 0,0);

            var  srcImg = document.getElementById("logo");
            ctx.drawImage(srcImg, 200,200,150,100);

            ctx.drawImage(srcImg, 100,50, 65,30, 300,300, 130,60);



        }
	}



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here


	var theCanvas = document.getElementById('Part7');
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if (ctx) {

            ctx.strokeStyle = "black";
            ctx.fillStyle = "blue";
            ctx.lineWidth = 2;

            ctx.fillRect(100,100,50,150);
            ctx.strokeRect(100,100,50,150);

            ctx.strokeStyle = "black";
            ctx.fillStyle = "red";
            ctx.lineWidth = 2;

            var degrees = 360;
            var radians = (degrees/180)*Math.PI;

            ctx.beginPath();
            ctx.arc(125,80,20,0,radians)
            ctx. stroke();
            ctx.closePath();
            ctx. fill()

            ctx.strokeStyle = "black";
            ctx.fillStyle = "blue";
            ctx.lineWidth = 2;
            var degrees = 360;
            var radians = (degrees/180)*Math.PI;

            ctx.beginPath();
            ctx.arc(115,80,2,0,radians);
            ctx. stroke();
            ctx.closePath();
            ctx. fill();

            ctx.strokeStyle="black";
            ctx.fillStyle ="blue";
            ctx.lineWidth = 2;
            var degrees = 360;
            var radians = (degrees/180)*Math.PI;

            ctx.beginPath();
            ctx.arc(130,80,2,0,radians);
            ctx.stroke();
            ctx.closePath();
            ctx.fill();


            var theString = "HI";

            ctx.font="20pt Georgia";
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "rgba(5, 155, 30, .5)";
            ctx.fillText(theString, 110, 160);
            ctx.strokeText(theString, 110, 160);
		}
	}
