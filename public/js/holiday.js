$(document).ready(function() {
  $('#createHoliday').submit(function(event) {
    event.preventDefault();

    var ort = $('#ort').val();
    var land = $('#land').val();
    var preis = $('#preis').val();
    var ab = $('#ab').val();
    var bis = $('#bis').val();

    var holiday = {
      ort: ort,
      land: land,
      preis: preis,
      ab: ab,
      bis: bis
    };

    $.ajax({
      url: 'http://localhost:8080/holiday',
       type: 'POST',
      data: JSON.stringify(holiday),
      contentType: 'application/json',
     success: function(jqXhr, textStatus, errorThrown) {
        
      

        
      },
      error: function(jqXhr, textStatus, errorThrown) {
       
      	console.log(errorThrown);
      }
    });

    $('#createHoliday')[0].reset();
  });
});
