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
    var table = $('#familyMembersList').DataTable({
      destroy: true,
      ajax: {
        url: 'http://localhost:8080/familymember',
        type: 'GET',
        dataType: 'json',
        dataSrc: ''
      },
      columns: [
        { data: 'firstName' },
        { data: 'secondName' },
        { data: 'bDay' },
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
