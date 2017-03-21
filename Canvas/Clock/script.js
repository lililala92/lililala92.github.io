        var c=document.getElementById("myCanvas");
		var ctx=c.getContext('2d');
		var width=ctx.canvas.width;
		var height=ctx.canvas.height;
		var r=width/2;

	function DrawBackground(){	
		ctx.save();
		ctx.translate(r,r);
		ctx.beginPath();
		ctx.arc(0,0,r-5,0,2*Math.PI,false);
		ctx.lineWidth=10;
		ctx.stroke();
		var hourText=[3,4,5,6,7,8,9,10,11,12,1,2];
		hourText.forEach(function(number,i){
			 ctx.font="18px Arial"
			 ctx.textAlign="center";
			 ctx.textBaseline="middle";
             var rad=(i*30/180)*Math.PI;
             var x=(r-30)*Math.cos(rad);
             var y=(r-30)*Math.sin(rad);
             ctx.fillText(number,x,y);
		})
		for(var i=0;i<60;i++)
		{
             var rad=i*6*Math.PI/180;
             var x=(r-18)*Math.cos(rad);
             var y=(r-18)*Math.sin(rad);
             ctx.beginPath();
		     ctx.arc(x,y,2,0,2*Math.PI,false);	
		     if(i%5!=0)
		     {
		     	ctx.fillStyle="#C3C1C1";
		     }
		     else{
		     	ctx.fillStyle="black";
		     }	   
		     ctx.fill();
		}       
	}
	function drawHour(hour,minute){
	   ctx.save();
	   ctx.lineWidth=7;
	   ctx.lineCap="round";
	   var rad=2*Math.PI/12*hour;
	   var mrad=2*Math.PI/12/60*minute;
	   ctx.rotate(rad+mrad);
       ctx.beginPath();
       ctx.moveTo(0,10);
       ctx.lineTo(0,-r/2);
       ctx.stroke();
       ctx.restore();
	}
	function drawMinute(minute){
	   ctx.save();
	   ctx.lineWidth=3;
	   ctx.lineCap="round";
	   var rad=2*Math.PI/60*minute;
	   ctx.rotate(rad);
       ctx.beginPath();
       ctx.moveTo(0,10);
       ctx.lineTo(0,-r+35);
       ctx.stroke();
       ctx.restore();
	}
	function drawSecond(second){
	   ctx.lineWidth=2;
	   ctx.strokeStyle="#C14543";
	   ctx.lineCap="round";
	   var rad=2*Math.PI/60*second;
	   ctx.rotate(rad);
       ctx.beginPath();
       ctx.moveTo(0,20);
       ctx.lineTo(0,-r+18);
       ctx.stroke();
	}

	function drawDot(){
			ctx.beginPath();
			ctx.fillStyle="#fff";
		    ctx.arc(0,0,4,0,2*Math.PI,false);
		    ctx.fill();
		}
	function Draw()
	{
		ctx.clearRect(0,0,200,200);
		var now=new Date();
		var hour=now.getHours();
		var minute=now.getMinutes();
		var second=now.getSeconds();
		DrawBackground();
		drawHour(hour,minute);
        drawMinute(minute);
        drawSecond(second);
        drawDot ();
        ctx.restore();
    }
    setInterval(Draw,1000);