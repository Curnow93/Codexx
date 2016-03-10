$(document).ready(function(){
	var profileDesc = $("<p>The most handsome web developer</p>");
	$(".img-portfolio").on("hover", function(){
		$(this).after().html(profileDesc);
	});
	$(".skills").on("click", function(){
		alert("clicked");
		$.ajax("../html/skills.php", {
			success: function(response){
				$(".response").hide().html(response).slideDown("slow");
			},
			error: function(response){
				alert("error");
				$(".response").hide().text("Error: AJAX could not be loaded").slideDown("slow");
			},
			timeOut: 3000,
			beforeSend: function(){
				$(".response").text("Loading skills...");
			}
		});
	});
	$(".story").on("click", function(){
		$.ajax("../html/mystory.html", {
			success: function(response){
				$(".response").hide().html(response).slideDown("slow");
			},
			error: function(response){
				alert("error");
				$(".response").hide().text("Error: AJAX could not be loaded").slideDown("slow");
			},
			timeOut: 3000,
			beforeSend: function(){
				$(".response").text("Loading story...");
			}
		});
	});
	$(".rec").on("click", function(){
		$.ajax("../html/rec.html", {
			success: function(response){
				alert("success");
				$(".response").hide().html(response).slideDown("slow");
			},
			error: function(response){
				alert("error");
				$(".response").hide().text("Error: AJAX could not be loaded").slideDown("slow");
			},
			timeOut: 3000,
			beforeSend: function(){
				$(".response").text("Loading recommendations...");
			}
		});
	});
});
