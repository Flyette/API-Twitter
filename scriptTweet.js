'use strict';

$(document).ready(function(){
	console.log('link');
	$.ajax({
		url : '/',
		dataType : 'json',
		type : 'GET',
		success : function(json){
			console.log('json');
		}
	})
});

