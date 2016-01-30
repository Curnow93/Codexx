$(document).ready(function(){
	alert("jQuery Loaded!");
	$(document).on("click", function(){
		alert("clicked");
		$.ajax("../html/confirmation.html", function(response){
			success: function(response){
				$("body").html(response).slideDown;
			}
		});
	});
});


