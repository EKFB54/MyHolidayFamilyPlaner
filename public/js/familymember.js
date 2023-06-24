$(document).ready(function() {
	loadDataTable();
	//process the form newVideo
	$("#newF").submit(function(event) {
		postFamily(event);
	});
	//Load Datatable
	$('#loadtable').click(function() {
		loadDataTable();
	});
});
function postVideo(event) {
	// get the form data
	var formData = {
		'id': $('input[name=id]').val(),
		'firstName': $('textarea[name=firstName]').val(),
		'secondName': $('input[name = secondName]').val(),
		'bDay': $('input[name=bDay]').val()
	};
	// process the form
	$.ajax({
		type: 'POST', // define the type of HTTP verb we want to use(POST for our form)
		contentType: 'application/json',
		url: 'http://localhost:8080/familymember/{id}', // url where we want to POST
		data: JSON.stringify(formData), // data we want to POST
		success: function(data, textStatus, jQxhr) {
			loadDataTable();
		},
		error: function(jqXhr, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
	// stop the form from submitting the normal way and refreshing the
	page
	event.preventDefault();
}

function loadDataTable() {
	var table = $('#Familytable').DataTable({
		destroy: true,
		"ajax": {
			"url": "http://localhost:8080/familymember", //URL
			"dataSrc": "" // Cause of flat JsonObjects
		},
		"columns": [
			{ "data": "id" },
			{ "data": "firstName" },
			{ "data": "secondName" },
			{ "data": "bDay" }
		]
	});
}