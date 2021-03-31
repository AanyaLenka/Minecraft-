var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;

block_width=30;
block_height=30;

var block_image="";
var player_image="";

function player_image_update(){
fabric.Image.fromURL("player.png",function(Img){
player_image=Img;
player_image.scaleToWidth(150);
player_image.scaleToHeight(140);
player_image.set({
top:player_y,
left:player_x
});
canvas.add(player_image);
});
}

function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img){
block_image=Img;
block_image.scaleToWidth(block_width);
block_image.scaleToHeight(block_height);
block_image.set({
top:player_y,
left:player_x
});
canvas.add(block_image);
});
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
key_Pressed=e.keyCode;
if(e.shiftKey==true && key_Pressed=='80')
{
console.log("p and shift pressed together");
block_width=block_width+10;
block_height=block_height+10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}
if(e.shiftKey==true && key_Pressed=='77')
{
console.log("m and shift pressed together");
block_width=block_width-10;
block_height=block_height-10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}
if(key_Pressed=='38')
{
up();
console.log("up");
}
if(key_Pressed=='40')
{
down();
console.log("down");
}
if(key_Pressed=='37')
{
left();
console.log("left");
}
if(key_Pressed=='39')
{
right();
console.log("right");
}
if(key_Pressed=='87')
{
new_image('wall.jpg');
console.log("W");
}
if(key_Pressed=='71')
{
new_image('ground.png');
console.log("G");
}
if(key_Pressed=='76')
{
new_image('light_green.png');
console.log("L");
}
if(key_Pressed=='84')
{
new_image('trunk.jpg');
console.log("T");
}
if(key_Pressed=='82')
{
new_image('roof.jpg');
console.log("R");
}
if(key_Pressed=='89')
{
new_image('yellow_wall.png');
console.log("Y");
}
if(key_Pressed=='68')
{
new_image('dark_green.png');
console.log("D");
}
if(key_Pressed=='85')
{
new_image('unique.png');
console.log("U");
}
if(key_Pressed=='67')
{
new_image('cloud.jpg');
console.log("C");
}
}
function up()
{
if (player_y>=0)
{
player_y=player_y-block_height;
console.log("block height= "+block_height);
console.log("When up arrow key is pressed, X="+player_x+",Y= "+player_y);
canvas.remove(player_image);
player_image_update();
}
}
function down()
{
if (player_y<=450)
{
player_y=player_y+block_height;
console.log("block height= "+block_height);
console.log("When down arrow key is pressed, X="+player_x+",Y= "+player_y);
canvas.remove(player_image);
player_image_update();
}
}
function left()
{
if (player_x>=0)
{
player_x=player_x-block_width;
console.log("block width= "+block_width);
console.log("When left arrow key is pressed, X="+player_x+",Y= "+player_y);
canvas.remove(player_image);
player_image_update();
}
}
function right()
{
if (player_x<=850)
{
player_x=player_x+block_width;
console.log("block width= "+block_width);
console.log("When right arrow key is pressed, X="+player_x+",Y= "+player_y);
canvas.remove(player_image);
player_image_update();
}
}
