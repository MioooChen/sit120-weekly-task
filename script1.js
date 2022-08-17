



var c =document.getElementById("myCanvas");
var ctx = c.getContext("2d");

/* DRAW CIRCLE

ctx.beginPath();
ctx.arc(95,50,40,0,2 * Math.PI);
ctx.stroke();
*/

// create gradient
var grd =ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, 'red');
grd.addColorStop(1, 'white');

//fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);





/* for HTML

<audio controls>
    <source src="xxx.ogg" type="audio/ogg" />
    <source src="xxx.mp3" type="audio/mpeg" />
</audio>

<video width="320" height="240" controls>
    <source src="xxx.ogg" type="video/ogg" />
    <source src="xxx.mp4" type="audio/mp4" />
</video>


*/



