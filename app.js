

var favFoodArray = ["pizza", "chocolate cake", "sushi", "lemon pepper wings"];

function showButtons(){

	for (var i = 0; i < favFoodArray.length; i++){
		
		var food = favFoodArray[i];
		var foodBut = $("<button>" + food + "</button>");

		foodBut.addClass("faveFoods")
		foodBut.attr("button-name", food)
		$("#gifbuts").append(foodBut)
	}
};

/*function animate(){
	
	var movePic = $(this).attr("moving-image")
	var stopPic = $(this).attr("still-image")

	var state = $(this).attr("image-state")
	if (state == "still"){
		state = "animated"
		$(this).attr("src", movePic)
	}

	if (state == "animated") {
		state = "still"
		$(this).attr("src", stopPic)
	}
}
*/

$(document).ready(function(){

	$("button").click(function(event){

		var fooda = $(this).attr("button-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ fooda + "&api_key=ed0b57bccd724e459067a598f72ea197&limit=10";

		console.log(fooda)
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
					
				e.append(rating)
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
//ask why this has to be under the button click
			});
		});
	});
//ask why this had to come before show buttons
});
showButtons();