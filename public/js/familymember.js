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

    // AJAX-Anfrage an den Server senden
    $.ajax({
      url: 'http://localhost:8080/familymember',
      type: 'POST',
      data: JSON.stringify(familyMember),
      contentType: 'application/json',
      success: function(response) {
        // Erfolgreiche Antwort vom Server erhalten
        console.log('Familienmitglied erfolgreich hinzugefügt:', response);

        // Hier kannst du den Code einfügen, um eine Bestätigungsmeldung anzuzeigen oder andere Aktionen auszuführen
      },
      error: function(error) {
        // Fehler bei der AJAX-Anfrage
        console.error('Fehler beim Hinzufügen des Familienmitglieds:', error);
      }
    });

    $('#createFamily')[0].reset();
  });
});
