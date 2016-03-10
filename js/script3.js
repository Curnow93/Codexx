$(document).ready(function(){
	alert("jQuery Loaded!");
	$(".ajaxNav").on("click", ".skills", function(){
		alert("skills clicked...");
		$.ajax("../html/skills.html", {
			success: function(response){
				$('.response').hide().html(response).slideDown('slow');
			},
			error: function(response){
				$('.response').hide().text('Error: content could not be loaded').slideDown('slow');
			},
			timeOut: 3000,
			beforeSend: function(){
				$('.response').addClass('loading');
			},
			complete: function(){
				$('.response').addClass('done');
			}
		});
	});
	$(".ajaxNav").on("click", ".story", function(){
		alert("story clicked...");
		$.get("../html/story.php", function(response){
			$(".response").hide().html(response).slideDown('slow');
		});
	});
});

/*var skills = {
	init: function(){
		$(".ajaxNav").on("click", ".skills", this.loadSkills);
	},
	loadSkills: function(){
		alert("skills clicked...");
		$.ajax("../html/skills.html", {
			success: function(response){
				$(".response").hide().html(response).slideDown();	
			}
		});
	}
};

$(document).ready(function(){
	skills.init();
});*/

/*function Confirmation(el){
	this.el = el;
	this.ticket = this.el.find(".ticket");
	var confirmation = this;
	this.loadConfirmation = function(){
		$.ajax("../html/confirmation.html"), {
			timeout: 3000,
			context: confirmation,
			success: function(response){
				this.ticket.html(response).slideDown();
			}
		}
	}
	this.showBoardingPass = function(){
		event.preventDefault();
		$(this).hide();
		confirmation.el.find('.boarding-pass').show();
		console.log(this);
		console.log(confirmation);
	}
}

$(document).ready(function(){
	var paris = new Confirmation($('.paris'));
	var london = new Confirmation($('.london'));
});*/

/*$(".contactForm").on("submit", function(){
	event.preventDefault();
	var form = $(this);
	$.ajax('/book', {
		type: POST,
		data: $(".contactForm").serialize(),
		dataType: "json",
		success: function(result){
			form.remove();
			var message = "<p></p>";
			message.append("Destination: " + result.location);
			message.append("Price: " + result.price);
			message.append("nights: " + result.nights);
			message.append("confirmation: " + result.confirmation);
			$(".vacation").hide().html(message).fadeIn();
		},
		contentType: "application/json"
	});
});*/

/*$(button).on("click", function(){
	$.ajax("../html/", function(){
		contentType: "application/json",
		dataType: "json",
		success: function(result){
			$.each(result, function(index, city){
				var favorite = $(".favorite-" + index);
				favorite.find("p").html(result.name);
				favorite.find("img").attr("src", result.image);
			});
		}
	});
	$.getJSON("/status", function(result){
		var statusElements = $.map(result, function(status, i){
			var listItem = $("<li></li>");
			$('<h3>'+status.name+'</h3>').appendTo(listItem);
			$('<p>'+status.status+'</p>').appendTo(listItem);
			return listItem;
		});
		$(".status-list").detach()
				.html(statusElements)
				.appendTo(".status");
	});
});*/

//$(button).off("click");
//$(button).trigger("click");
//$(<dom element>).on("<event>.<namespace>");

//$.each returns array unchanged, $.map returns new changed array...

//$.fn allows you to extend jquery with your own functions...
/*$.fn.priceify = function(options){
	this.each(function(){
		var settings = $.extend({
		days: 3,
		vacation: this,
		price: $(this).data("price");
		}, options);
		var show = function(){
			var details = $("<p>Book" + settings.days + " days for $"+ (settings.days * settings.price)+"</p>");
			$(this).hide();
			settings.vacation.append(details);
		};
		settings.vacation.on("click.priceify", "button", show);
		settings.vacation.on("show.priceify", show);
	});
};

$("show-prices").on("click", function(event){
	event.preventDefault();
	//$(".vacation").priceify({days: 5});
});*/

//promises allow you to save the ajax call in a variable...

/*var weather = function(){
	today: function(location){
		var promise = $.deferred();	//creates a promise
		$.ajax({"/weather", {
			data: {q:location},
			success: function(result){
				promise.resolve(result); //.resolve calls .done
			},
			error: function(){
				var error = "promise failed...";
				promise.reject(error);
			}
		});
		return promise;
	}
}

$("button").on("click", function(){
	var location = $(".loc").text();
	var todayPromise = Weather.today(location);
	todayPromise.done(function(result){
		$(".weather").text(result);
	}).fail(function(error){
		console.log(error);
	});
});
});*/

//use $.when and $.then to synchronize when ajax is loaded.



