var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = 'FF0000';
ctx.lineWidth = 17;
ctx.lineCap = 'round';
ctx.shadowBlur = 10;
ctx.shadowColor = 'FF0000';

function degreeToRad(degree){
	var cons = Math.PI/180;
	return degree*cons;
}
var counter = 0;
//right side
var rc_x = 0;
var rl_x = 336;
var rl_x_end = 250;
var rl_y = 170;
var rl_y_end = 290;
var init_rl_y =0; 
var init_rl_x = 0;

//left side
var ll_x=250;
var ll_x_end=0;
var ll_y=290;
var ll_y_end=170;
var lc_x = 0;


function render(){
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var seconds = now.getSeconds();
	var miliseconds = now.getMilliseconds();
	var date = now.toDateString();
	var time = now.toLocaleTimeString();
	var reference = -130;
	var reference2 = -200;
	var newSeconds = seconds + (miliseconds/1000);
	var newHours = hour + (minute/60);
	var newMinute = minute+(seconds/60);
	//var hour = 3;
	
	//console.log(hour);


	//Background
	ctx.fillStyle = '333333';
	ctx.fillRect(0,0, 500, 500);


	// //right half
	// ctx.beginPath();
	// ctx.arc(290	,150, 50,degreeToRad(reference), degreeToRad(reference+(x*6)));
	// ctx.stroke();
	//line1
	// ctx.moveTo(336,170);
	// ctx.lineTo(250,290);
	// ctx.stroke();

	//left half
	// ctx.beginPath();
	// ctx.arc(220	,150, 50,degreeToRad(reference2), degreeToRad(reference2+(25*6)));
	// ctx.stroke();
	//line2
	// ctx.moveTo(175,170);
	// ctx.lineTo(250,290);
	// ctx.stroke();

	//test
	// ctx.moveTo(0,0);
	// ctx.lineTo(250,290);
	// ctx.stroke();



	if(counter<25){
		//right half
		ctx.beginPath();
		ctx.arc(290	,150, 50,degreeToRad(reference), degreeToRad(reference+(rc_x*6)));
		ctx.stroke();
		rc_x++;counter++;
	}else if(counter <=120 && counter >=25){
		init_rl_y = (rl_y_end-rl_y)+50;
		init_rl_x = (rl_x - rl_x_end)+250;
		//right circle
		ctx.beginPath();
		ctx.arc(290	,150, 50,degreeToRad(reference), degreeToRad(reference+(rc_x*6)));
		ctx.stroke();
		//line
		ctx.moveTo(336,170);
		ctx.lineTo(init_rl_x,init_rl_y);
		ctx.stroke();
		console.log((init_rl_x));
		// console.log((((rl_y_end - rl_y)/rl_y_end)+170)); 
		rl_x-= 0.9;
		rl_y-=1.29;
		counter++;
		//console.log((((rl_x))));
		//console.log(rl_y);
	}else if( counter >=120 && counter<=213){
		
		//right circle
		ctx.beginPath();
		ctx.arc(290	,150, 50,degreeToRad(reference), degreeToRad(reference+(rc_x*6)));
		ctx.stroke();
		//line
		ctx.moveTo(336,170);
		ctx.lineTo(250,290);
		ctx.stroke();

		//left line
		ctx.moveTo(250,290);
		ctx.lineTo(ll_x,(ll_y));
		ctx.stroke();
		ll_y-=1.29;
		ll_x-= 0.83;
		counter++;
		console.log(counter);
	}else if(counter >213 && lc_x<25){
		//right circle
		ctx.beginPath();
		ctx.arc(290	,150, 50,degreeToRad(reference), degreeToRad(reference+(rc_x*6)));
		ctx.stroke();
		//line
		ctx.moveTo(336,170);
		ctx.lineTo(250,290);
		ctx.stroke();

		//left line
		ctx.moveTo(250,290);
		ctx.lineTo(175,170);
		ctx.stroke();
		//left circle
		ctx.beginPath();
		ctx.arc(220	,150, 50,degreeToRad(reference2), degreeToRad(reference2+(lc_x*6)));
		ctx.stroke();
		lc_x++;
	}else{
		ctx.beginPath();
		ctx.arc(290	,150, 50,degreeToRad(reference), degreeToRad(reference+(rc_x*6)));
		ctx.stroke();
		//line
		ctx.moveTo(336,170);
		ctx.lineTo(250,290);
		ctx.stroke();

		//left line
		ctx.moveTo(250,290);
		ctx.lineTo(175,170);
		ctx.stroke();
		//left circle
		ctx.beginPath();
		ctx.arc(220	,150, 50,degreeToRad(reference2), degreeToRad(reference2+(lc_x*6)));
		ctx.stroke();

		ctx.font = "50px Arial";
		ctx.fillStyle = 'e768ad';
		ctx.fillText("BE MY", 190,60);

		ctx.font = "50px Arial";
		ctx.fillStyle = 'e768ad';
		ctx.fillText("VALENTINE", 120,350);	
	}
	
}

setInterval(render, 50);