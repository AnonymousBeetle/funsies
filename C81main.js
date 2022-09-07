canvas = document.getElementById("canvas");
color = "black";
width_of_line = 1;
var last_position_of_x, last_position_of_y;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if(width < 992)
{
    document.getElementById("canvas").width = new_width;
    document.getElementById("canvas").height = new_height;
    document.body.style.overflow = "hidden"
}

ctx = canvas.getContext("2d");

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    color = document.getElementById("color").value;
    console.log(color);
    console.log("my_touchstart");

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    console.log(my_touchmove)
    currenttouch_x = e.touches[0].clientX - canvas.offsetLeft;
    currenttouch_y = e.touches[0].clientY - canvas.offsetTop;

    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("current position of x and y coordinates = ");
    console.log("x = " + currenttouch_x + "y = " + currenttouch_y);
    ctx.lineTo(currenttouch_x, currenttouch_y);
    ctx.stroke();
    

    last_position_of_x = currenttouch_x;
    last_position_of_y = currenttouch_y;
}