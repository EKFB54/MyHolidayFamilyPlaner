$(document).ready(function() {
  var selectedHolidayId = null;
  var selectedHolidayWishId = null;

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

  $("#addHolidayWish").submit(function(event) {
    event.preventDefault();
    var urlaubID = $('#urlaubID_wish').val();
    var id = $('#id').val();
    var ort = $('#ort_wish').val();

    var holidayWish = {
      urlaub_id: urlaubID,
      id: id,
      ort: ort
    };

    $.ajax({
      url: 'http://localhost:8080/holidaywish',
      type: 'POST',
      data: JSON.stringify(holidayWish),
      contentType: 'application/json',
      success: function(data, textStatus, jqXhr) {
        console.log('Successfully added holiday wish');
        loadHolidayWishlist();
        resetHolidayWishForm();
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  });

  $(document).on('click', '.delete-wish-button', function() {
    var holidayWishId = $(this).attr('data-holidayWishId');

    $.ajax({
      url: 'http://localhost:8080/holidaywish/' + holidayWishId,
      type: 'DELETE',
      success: function(data, textStatus, jqXhr) {
        console.log('Successfully deleted holiday wish');
        loadHolidayWishlist();
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  });

  $(document).on('click', '.select-wish-button', function() {
    selectedHolidayWishId = $(this).attr('data-holidayWishId');
    var holidayId = $(this).closest('tr').find('td:eq(0)').text();
    var id = $(this).closest('tr').find('td:eq(1)').text();
    var ort = $(this).closest('tr').find('td:eq(2)').text();

    // Set the values in the form
    $('#urlaubID_wish').val(holidayId);
    $('#id').val(id);
    $('#ort_wish').val(ort);
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
		    return '<div class="action-buttons">' +
		      '<button class="delete-button" data-urlaubID="' + row.urlaubID + '"><img src="images/delete.png" alt="Delete"></button>' +
		      '<button class="select-button" data-urlaubID="' + row.urlaubID + '">Select</button>' +
		      '</div>';
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

  function loadHolidayWishlist() {
    var table = $('#holidayWishlist').DataTable({
      destroy: true,
      ajax: {
        url: 'http://localhost:8080/holidaywish',
        type: 'GET',
        dataType: 'json',
        dataSrc: ''
      },
      columns: [
        { data: 'urlaub_id' },
        { data: 'id' },
        { data: 'ort' },
        {
          data: null,
          render: function (data, type, row) {
            return '<button class="delete-wish-button" data-holidayWishId="' + row.id + '"><img src="images/delete.png" alt="Delete"></button>' +
              '<button class="select-wish-button" data-holidayWishId="' + row.id + '">Select</button>';
          },width: "150px"
        }
      ],
      lengthChange: false,
      searching: false,
      paging: false,
      info: false
    });
  }

  function resetHolidayWishForm() {
    $('#urlaubID_wish').val('');
    $('#id').val('');
    $('#ort_wish').val('');
  }

  $(document).ready(function() {
    loadDataTable();
    loadHolidayWishlist();
  });
});
