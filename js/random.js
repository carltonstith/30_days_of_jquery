$(document).ready(function() {
	// $("#button").click(function() {
	// 	$("body").append(function() {
	// 		$.ajax({
	// 			type: "GET",
	// 			url: "http://www.colourlovers.com/api/patterns/top?format=json",
	// 			success: function(data){
	// 				var element = data[Math.floor(Math.random()*50)];
	// 				$("body").css({
	// 					"background-image": "url("+ element.imageUrl +")"
	// 				});
	// 			}
	// 		});
	// 	});
	// });
	$("#button").click(function(){
		$.getJSON("http://www.colourlovers.com/api/patterns/top?jsonCallback=?&numResults=50",function(data){
			var element = data[Math.floor(Math.random()*50)];
		$("body").css({
				"background-image": "url("+ element.imageUrl +")"
			});
		});
	});
});