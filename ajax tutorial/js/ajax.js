/*
//alert('hello world');

$(document).ready(function(){

	//alert("hello world");
});
*/
var $friends = $('#friends');
var $name = $('#name');
var $age = $('#age');

var friendTemplate = "" + 
	"<li>" +
	"<p><strong>Name:</strong> {{name}}</p>" + 
	"<p><strong>Age:</strong> {{age}}</p>" +
	"<button id='{{id}}' class='remove'>X</button>" +
	"</li>";

function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));
};

$(document).ready(function(){

	//AJAX GET Function - then loop through and create the DOM element to display it
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/friends',
		success: function(friends) {
		// console.log("I have friends!", data); //returns all of johnbob's friends
			$.each(friends, function(i, friend){
				addFriend(friend);	
			});

		},

		error: function(){
			alert('error loading friends');
		}	
	});

	$('#add-friend').on('click', function(){

		var friend = {
			name: $name.val(),
			age: $age.val()
		};
		//AJAX POST Function - click the button w/ id add-friend and then pass it to the API
		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/friends',
			data: friend,
			success: function(newFriend){
				addFriend(newFriend);	
			},

			error: function(){
				alert('error saving order');
			}
		});

	});

	$friends.delegate('.remove', 'click', function(){

		var $li = $(this).closest('li');
		//AJAX DELETE Function - click the .remove class button and the id identifies what to delete
		$.ajax({
			type: 'DELETE',
			url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
			success: function(){
				$li.fadeOut(300, function(){
					$(this).remove();
				});
			}
		});
	});
});

