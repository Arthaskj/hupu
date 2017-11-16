$(function(){
		
		var photoA = new Array("060.jpeg","061.jpeg","064.jpeg","065.jpeg","066.jpeg","067.jpeg");

	var num = photoA.length;
		for(var i=0;i<num;i++){
			$("nav .ban li:eq("+ i +")").css({"background":"url(img/"+ photoA[i] +") no-repeat center","background-position":"center"});
		}
		console.log($("nav .ban li:eq(1)").css("background"));
	$(".ban").css("width",num*1350+"px");
	var timer = null;

	$(".choseOne ul li,.nav ul li").mouseover(function (){
				var ss=$(this).index();
				var moveP = ss*1350;
//				alert($(this).index());
				ys(ss);
				$(".ban").css("left","-" +moveP+"px");
				clearInterval(timer);
	})
	
	$(".choseOne ul li").mouseout(function(){
				timer = setInterval(changeP,2000);
	})
	
	

	timer = setInterval(changeP,2000);

	function changeP(){
//		moveP=parseInt($(".ban").attr("left"));
		moveP = Math.abs(parseInt($(".ban").css("left"))) +1350;
		console.log(moveP);
		if(moveP == num*1350){
			moveP=0;
		}
		$(".ban").css("left","-" +moveP+"px");
		// moveP += 1350;
		var sNum = moveP/1350;
		ys(sNum);
		
	}
	
	function ys(sNum){
		$(".nav ul li:eq("+ sNum +")").addClass("focusOn");
		$(".nav ul li:eq("+ sNum +")").siblings().removeClass("focusOn");
		$(".choseOne ul li:eq("+ sNum +")").addClass("borderO");
		$(".choseOne ul li:eq("+ sNum +")").siblings().removeClass("borderO");
	}
	
	
	
	$(".ban").mouseover(function(){
		clearInterval(timer);
	})
	$(".ban").mouseout(function(){
		timer = setInterval(changeP,2000);
	})
	

	var photob = new Array("070.jpeg","069.jpeg","068.jpeg","071.jpeg");
	var photoc = new Array("006.png","003.png","004.png","005.png","008.png","009.png");
photo($("nav .servers ul li"),photob);
photo2($(".banner .server img"),photoc);





function photo(attr,array){
	
		var num = array.length;
		for(var i=0;i<num;i++){
			attr.eq(i).css({"background":"url(img/"+ array[i] +") no-repeat center","background-position":"center"});
		}
}
function photo2(att,array){
	
		var num = array.length;
		for(var i=0;i<num;i++){
			att.eq(i).attr("src","img/"+ array[i]);
		}
}	
	


		
	


})  //结束位置