
var gameOfThronesChar = ["Tyrion Lannister", "The Night King" ,"Daenerys", "Jon Snow", "Cersei", "Arya Stark", "Jamie Lannister"];

function showButtons(){

	for (var i = 0; i < gameOfThronesChar.length; i++){
		
		var char = gameOfThronesChar[i];
		var charBut = $("<button>" + char + "</button>");

		charBut.addClass("favechars")
		charBut.attr("button-name", char)
		$("#gifbuts").append(charBut)

	}
};

$(document).ready(function(){

	$("button").click(function(event){
		$("#gifInfo").empty()
		var charU = $(this).attr("button-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ charU + "&api_key=ed0b57bccd724e459067a598f72ea197&limit=10";

		console.log(charU)
		$.ajax({
		url: queryURL,
		method: "GET"
		}).done(function(response){
			console.log(response)

			for (var i = 0; i <response.data.length; i++){
				var info = response.data
				var rating = info[i].rating
				var stillPic = info[i].images.fixed_height_still.url
				var imag = $("<div>")
				imag.addClass("pics")

				imag.prepend("Rating: " + rating)
				im = $("<img src =" + stillPic + ">")
				im.attr("image-state", "still")
				im.attr("moving-image",info[i].images.fixed_height.url)
				im.attr("still-image",info[i].images.fixed_height_still.url)
				imag.append(im)
				$("#gifInfo").prepend(imag)
			};

			$("img").click(function(event){

				var movePic = $(this).attr("moving-image")
				var stopPic = $(this).attr("still-image")
				var state = $(this).attr("image-state")
				
				if (state === "still"){
					$(this).attr("image-state", "animated")
					$(this).attr("src", movePic)
				}

				if (state === "animated"){
					$(this).attr("image-state", "still")
					$(this).attr("src", stopPic)
				}
//ask why this has to be under the button click
			});
		});

	});

});


$("#submit").click(function(event){
		event.preventDefault();
		var newchar = $("#input").val().trim();
		gameOfThronesChar.push(newchar)
		$("#gifbuts").empty()

		showButtons()


	$("button").click(function(event){
		$("#gifInfo").empty()
		var charU = $(this).attr("button-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ charU + "&api_key=ed0b57bccd724e459067a598f72ea197&limit=10";

		console.log(charU)
		$.ajax({
		url: queryURL,
		method: "GET"
		}).done(function(response){
			console.log(response)

			for (var i = 0; i <response.data.length; i++){
				var info = response.data
				var rating = info[i].rating
				var stillPic = info[i].images.fixed_height_still.url
				var e = $("<div>")
					
				e.append("Rating: " + rating)
				im = $("<img src =" + stillPic + ">")
				im.attr("image-state", "still")
				im.attr("moving-image",info[i].images.fixed_height.url)
				im.attr("still-image",info[i].images.fixed_height_still.url)
				e.append(im)
				$("#gifInfo").prepend(e)
			};

			$("img").click(function(event){

				var movePic = $(this).attr("moving-image")
				var stopPic = $(this).attr("still-image")
				var state = $(this).attr("image-state")
				
				if (state === "still"){
					$(this).attr("image-state", "animated")
					$(this).attr("src", movePic)
				}

				if (state === "animated"){
					$(this).attr("image-state", "still")
					$(this).attr("src", stopPic)
				}
			});
		});

	});

});
//ask why this had to come before show buttons
showButtons();