

var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ foodInfo + "&api_key=ed0b57bccd724e459067a598f72ea197&limit=10";
var favFoodArray =["pizza", "chocolate cake", "sushi", "lemon pepper wings"];
var foodInfo;


function showButtons(){

	for(var i = 0; i < favFoodArray.length; i++) {
		
		var food = favFoodArray[i]

		var foodBut = $("<button>" + food + "</button>")

		foodBut.addClass("faveFoods")

		foodBut.attr("button-name", food)

		$("#gifbuts").append(foodBut)
	}
};

$(document).ready(function(){
	$("button").click(function(event){

	foodInfo = $(this).attr("button-name");

	console.log(foodInfo)

	$.ajax({

	    url: queryURL,

	    method: "GET"

	}).done(function(response) {

			console.log(response)
	   	});
	});
});
showButtons();