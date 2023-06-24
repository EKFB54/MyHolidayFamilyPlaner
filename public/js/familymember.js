$(document).ready(function() {
  $('#createFamily').submit(function(event) {
    event.preventDefault();

    var firstName = $('#firstName').val();
    var secondName = $('#secondName').val();
    var bDay = $('#bDay').val();

    var familyMember = {
      firstName: firstName,
      secondName: secondName,
      bDay: bDay
    };

    
    $.ajax({
      url: 'http://localhost:8080/familymember',
      type: 'POST',
      data: JSON.stringify(familyMember),
      contentType: 'application/json',
      success: function(jqXhr, textStatus, errorThrown) {
        
       
        
      },
      error: function(jqXhr, textStatus, errorThrown) {
       
      	console.log(errorThrown);
      }
    });

    $('#createFamily')[0].reset();
  });
});
