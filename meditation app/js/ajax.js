/*
//alert('hello world');

$(document).ready(function(){

	//alert("hello world");
});
*/
var $scripture = $('#scripture');
var $book = $('#book');
var $chapter = $('#chapter');
var $verse = $('#verse');
var $findScripture = $('#find-scripture');


//this function uses mustache.js to format the html/info

var scriptureTemplate = 


$(document).ready(function(){
	
	//click function to set variables
	$findScripture.on('click', function(){
		book = $book.val();
		chapter = $chapter.val();
		verse = $verse.val();
		search = "p=" + book + chapter + ":" + verse;
		console.log(search);

	//AJAX GET Function - calling the Bible API
		$.ajax({
			type: 'GET',
			url: 'http://getbible.net/json',
			dataType: 'jsonp',
			data: search,
			jsonp: 'getbible',
			success: function(json) {	
				$.each(json.book, function(index, value){
					console.log(value.book_name);
					console.log(value.chapter_nr);
					$.each(value.chapter, function(index, value){
						console.log(value.verse_nr);
						console.log(value.verse);
					});
				});		
				//console.log(/*json.book[0].book_name + " " + json.book[0].chapter_nr + " " + */ json.book[0].verse);	
			},

			error: function(){
				alert('error loading scripture');
			}	
		});
	});
});

	
