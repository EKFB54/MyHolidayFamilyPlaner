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
      success: function(response) {
        
        console.log('Familienmitglied erfolgreich hinzugefügt:', response);

        
      },
      error: function(error) {
        
        console.error('Fehler beim Hinzufügen des Familienmitglieds:', error);
      }
    });

    $('#createFamily')[0].reset();
  });
});
