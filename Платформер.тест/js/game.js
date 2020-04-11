const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
var isMouseDown = false;

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;


cvs.addEventListener("mousedown", function() {
	isMouseDown = true;
});

cvs.addEventListener("mouseup", function() {
	isMouseDown = false;
	ctx.beginPath();
});


ctx.lineWidth = 10 * 2;
cvs.addEventListener("mousemove", function(e) {

	if( isMouseDown ) {
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
		ctx.fill()

		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY)
	}
});

document.addEventListener("keydown", function(e) {
	if(e.keyCode == 38) {
		alert("38");
	}
});
