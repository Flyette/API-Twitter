'use strict';

$(document).ready(function(){
	console.log('link');


var maketemplate = function (mymustache, cible, json){
		var info = Mustache.to_html(mymustache, json);
		cible.html(info);

	}
	$.ajax({
		url : 'http://localhost:3000',
		dataType : 'json',
		type : 'GET',
		crossDomain: true,
		success : function(json){
			console.log(json);
			 var mytemplate = $("#tpl").html(); //html avec des trous
		maketemplate(mytemplate, $('body'), json);
		}
	});

});
