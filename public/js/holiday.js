/* ====================================================================================================================
 * create holiday
 * ====================================================================================================================*/


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


/* ====================================================================================================================
 * if select holiday
 * ====================================================================================================================*/

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
  
/* ====================================================================================================================
 * delete holiday
 * ====================================================================================================================*/

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
  
  /* ====================================================================================================================
 * select/update holiday
 * ====================================================================================================================*/


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
  
 
  

/* ====================================================================================================================
 * 
 * create holidaywish
 * 
 * 
 * ====================================================================================================================*/



  $('#addHolidayWish').submit(function(event) {
    event.preventDefault();

    var urlaubID = $('#urlaubID_wish').val();
    var id = $('#id').val();
    var description = $('#description').val();

    var holidayWish = {
      id: id,
      description: description,
      holiday: {
        urlaubID: urlaubID
      }
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
        selectedHolidayWishId = null;
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log('Error:', errorThrown);
        console.log('Error Details:', jqXhr);
      }
    });
  });

  
  /* ====================================================================================================================
 * select/update holidaywish
 * ====================================================================================================================*/


 $(document).on('click', '.select-wish-button', function() {
    selectedHolidayWishId = $(this).attr('data-holidayWishId');
    var urlaubID = $(this).closest('tr').find('td:eq(0)').text();
    var id = $(this).closest('tr').find('td:eq(1)').text();
    var description = $(this).closest('tr').find('td:eq(2)').text();

    $('#urlaubID_wish').val(urlaubID);
    $('#id').val(id);
    $('#description').val(description);
  });

  $('#updateWishButton').click(function(event) {
    event.preventDefault();
    var urlaubID = $('#urlaubID_wish').val();
    var id = $('#id').val();
    var description = $('#description').val();

    var holidayWish = {
      id: id,
      description: description,
      holiday: {
        urlaubID: urlaubID
      }
    };

    $.ajax({
      url: 'http://localhost:8080/holidaywish/' + selectedHolidayWishId,
      type: 'PUT',
      data: JSON.stringify(holidayWish),
      contentType: 'application/json',
      success: function(data, textStatus, jqXhr) {
        console.log('Successfully updated holiday wish');
        loadHolidayWishlist();
        resetHolidayWishForm();
        selectedHolidayWishId = null;
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  });

/* ====================================================================================================================
 * delete holidaywish
 * ====================================================================================================================*/


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

   /* ====================================================================================================================
 * Load holiday list
 * ====================================================================================================================*/

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

    /* ====================================================================================================================
 * Load holidaywish list
 * ====================================================================================================================*/

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
        { data: 'description' },
        {
          data: null,
          render: function (data, type, row) {
            return '<button class="delete-wish-button" data-holidayWishId="' + row.id + '"><img src="images/delete.png" alt="Delete"></button>' +
              '<button class="select-wish-button" data-holidayWishId="' + row.id + '">Select</button>';
          }
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
    $('#description').val('');
  }


    loadDataTable();
    loadHolidayWishlist();
    
    });

  
  
