var warp = document.getElementById('warp'),
	box = document.getElementById('box'),
	arr = box.getElementsByTagName('div'),
	radius = calculateRadius(129,20);

for(var i = 0; i< arr.length; i++){
	arr[i].style.background = 'url("./img/p'+ (i + 1) +'.png") no-repeat';
	arr[i].style.WebkitTransform = "rotateY("+ 360 / arr.length * i +
	"deg) translatez("+ radius +"px)"
}

function calculateRadius(length, totalNum){
	return Math.round(length/ (2 * Math.tan(Math.PI / totalNum))) -3;
}

var startX = 0,
	x = 0,
	endX = 0;
var flag = true;
$('#box').on('touchstart',function(event){
	event.preventDefault();
	var touch = event.targetTouches[0];
	startX = touch.pageX - x;
	$('.box div').css("opacity",'.8')
})

$('#box').on('touchmove',function(event){
	if(flag){
		event.preventDefault();
		var touch = event.targetTouches[0];
		endX = touch.pageX;
		x = endX - startX;
		box.style.transform = 'rotateY('+ x +'deg)';
		setTimeout(() => {
			$('.box div').css("opacity",'1')
		}, 200);
	}else{
		return false
	}
})