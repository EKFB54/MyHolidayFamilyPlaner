$(document).ready(function() {
  var selectedHolidayId = null;

  $('#createHoliday').submit(function(event) {
    event.preventDefault();
    var urlaubID = $('#urlaubID').val();
    var ort = $('#ort').val();
    var land = $('#land').val();
    var preis = $('#preis').val();
    var ab = $('#ab').val();
    var bis = $('#bis').val();

    var holiday = {
      urlaubID: urlaubID,
      ort: ort,
      land: land,
      preis: preis,
      ab: ab,
      bis: bis
    };

    if (selectedHolidayId) {
      $.ajax({
        url: 'http://localhost:8080/holiday/' + selectedHolidayId,
        type: 'PUT',
        data: JSON.stringify(holiday),
        contentType: 'application/json',
        success: function(data, textStatus, jqXhr) {
          console.log('Successfully updated holiday');
          loadDataTable();
          resetForm();
          selectedHolidayId = null;
        },
        error: function(jqXhr, textStatus, errorThrown) {
          console.log(errorThrown);
        }
      });
    } else {
      $.ajax({
        url: 'http://localhost:8080/holiday',
        type: 'POST',
        data: JSON.stringify(holiday),
        contentType: 'application/json',
        success: function(data, textStatus, jqXhr) {
          console.log('Successfully created holiday');
          loadDataTable();
          resetForm();
        },
        error: function(jqXhr, textStatus, errorThrown) {
          console.log(errorThrown);
        }
      });
    }
  });

  $(document).on('click', '.delete-button', function() {
    var urlaubID = $(this).attr('data-urlaubID');

    $.ajax({
      url: 'http://localhost:8080/holiday/' + urlaubID,
      type: 'DELETE',
      success: function(data, textStatus, jqXhr) {
        console.log('Successfully deleted holiday');
        loadDataTable();
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  });

  $(document).on('click', '.select-button', function() {
    selectedHolidayId = $(this).attr('data-urlaubID');
    var urlaubID = $(this).closest('tr').find('td:eq(0)').text();
    var ort = $(this).closest('tr').find('td:eq(1)').text();
    var land = $(this).closest('tr').find('td:eq(2)').text();
    var preis = $(this).closest('tr').find('td:eq(3)').text();
    var ab = $(this).closest('tr').find('td:eq(4)').text();
    var bis = $(this).closest('tr').find('td:eq(5)').text();

    $('#urlaubID').val(urlaubID);
    $('#ort').val(ort);
    $('#land').val(land);
    $('#preis').val(preis);
    $('#ab').val(ab);
    $('#bis').val(bis);
  });

  $('#updateButton').click(function() {
    var urlaubID = $('#urlaubID').val();
    var ort = $('#ort').val();
    var land = $('#land').val();
    var preis = $('#preis').val();
    var ab = $('#ab').val();
    var bis = $('#bis').val();

    var holiday = {
      urlaubID: urlaubID,
      ort: ort,
      land: land,
      preis: preis,
      ab: ab,
      bis: bis
    };

    $.ajax({
      url: 'http://localhost:8080/holiday/' + selectedHolidayId,
      type: 'PUT',
      data: JSON.stringify(holiday),
      contentType: 'application/json',
      success: function(data, textStatus, jqXhr) {
        console.log('Successfully updated holiday');
        loadDataTable();
        resetForm();
        selectedHolidayId = null;
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  });

  function loadDataTable() {
    var table = $('#holidaySelectionList').DataTable({
      destroy: true,
      ajax: {
        url: 'http://localhost:8080/holiday',
        type: 'GET',
        dataType: 'json',
        dataSrc: ''
      },
      columns: [
        { data: 'urlaubID' },
        { data: 'ort' },
        { data: 'land' },
        { data: 'preis' },
        { data: 'ab' },
        { data: 'bis' },
        {
          data: null,
          render: function (data, type, row) {
            return '<button class="delete-button" data-urlaubID="' + row.urlaubID + '"><img src="images/delete.png" alt="Delete"></button>' +
              '<button class="select-button" data-urlaubID="' + row.urlaubID + '">Select</button>';
          }
        }
      ],
      lengthChange: false,
      searching: false,
      paging: false,
      info: false
    });
  }

  function resetForm() {
    $('#urlaubID').val('');
    $('#ort').val('');
    $('#land').val('');
    $('#preis').val('');
    $('#ab').val('');
    $('#bis').val('');
  }

  loadDataTable();
});