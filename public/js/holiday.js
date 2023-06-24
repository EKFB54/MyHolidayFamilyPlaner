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
  // Add event listener for each delete button
  $('.delete-button').each(function() {
    $(this).click(function() {
      var memberId = $(this).attr('id');

      $.ajax({
        url: 'http://localhost:8080/familymember/' + memberId,
        type: 'DELETE',
        success: function(jqXhr, textStatus, errorThrown) {
          console.log('Successfully deleted family member');
        },
        error: function(jqXhr, textStatus, errorThrown) {
          console.log(errorThrown);
        }
      });
    });
  });

  function loadDataTable() {
    var table = $('#holdaySelectionList').DataTable({
      destroy: true,
      ajax: {
        url: 'http://localhost:8080/holiday',
        type: 'GET',
        dataType: 'json',
        dataSrc: ''
      },
      columns: [
        { data: 'ort' },
        { data: 'land' },
        { data: 'preis' },
        { data: 'ab'},
        { data: 'bis'},
        {
          data: null,
          render: function (data, type, row) {
            return '<button class="delete-button" id="' + row.id + '"><img src="images/delete.png" alt="Delete"></button>';
          }
        }
      ]
    });
  }

  loadDataTable();
});

