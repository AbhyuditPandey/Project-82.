var mouseevent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById('myCanvas');
ctx =canvas.getContext("2d");
color="red";
width_of_line=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{ 
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseevent="mousedown";

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{ 
   
    mouseevent="mouseup";
    
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{ 
   
    mouseevent="mouseleave";
    
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{ 
    current_position_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_mouse_y=e.clientY - canvas.offsetTop;
    if(mouseevent=="mousedown")
    { 
        ctx.beginPath();
    ctx.storkeStyle=color;
    ctx.lineWidth=width_of_line;
    //console.log("last position of x and y coordinates=");
    //console.log(" x="+ last_position_of_x+"y = " + last_position_of_y);
   // ctx.moveTo(last_position_of_x,last_position_of_y);
 //   console.log("current position of x and y coordinates=");
   // console.log(" x="+ current_position_mouse_x+"y = " + current_position_mouse_y);
    //ctx.lineTo(current_position_mouse_x,current_position_mouse_y);
    ctx.arc(current_position_mouse_x,current_position_mouse_y,20,0,2*Math.PI);
    ctx.stroke();


    }
    //last_position_of_x=current_position_mouse_x;
    //last_position_of_y=current_position_mouse_y;
}
function ClearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}
