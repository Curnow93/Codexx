$(document).ready(function(){
	var profileDesc = $("<p>The most handsome web developer</p>");
	$(".img-portfolio").on("hover", function(){
		$(this).after().html(profileDesc);
	});
	$(".skills").on("click", function(){
		alert("clicked");
		$.ajax("../html/skills.html", {
			success: function(response){
				$(".response").hide().html(response).slideDown("slow");
			},
			error: function(response){
				$(".response").hide().text("Error: AJAX could not be loaded").slideDown("slow");
			},
			timeOut: 3000,
			beforeSend: function(){
				$(".response").text("Loading...");
			},
			complete: function(){
			}
		});
	});
	$(".story").on("click", function(){
		$.ajax("../html/story.html", {
			success: function(response){
				$(".response").hide().html(response).slideDown("slow");
			},
			error: function(response){
				$(".response").hide().text("Error: AJAX could not be loaded").slideDown("slow");
			},
			timeOut: 3000,
			beforeSend: function(){
				$(".response").text("Loading...");
			},
			complete: function(){
				$(".response").hide();
			}
		});
	});
});
