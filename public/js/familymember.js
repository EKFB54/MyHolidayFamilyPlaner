$(document).ready(function() {
  var selectedMemberId = null;

  $('#createFamily').submit(function(event) {
    event.preventDefault();

    var memberId = $('#ID').val(); 
    var firstName = $('#firstName').val();
    var secondName = $('#secondName').val();
    var bDay = $('#bDay').val();

    var familyMember = {
      id: memberId, 
      firstName: firstName,
      secondName: secondName,
      bDay: bDay
    };

    if (selectedMemberId) {
        $.ajax({
        url: 'http://localhost:8080/familymember/' + selectedMemberId,
        type: 'PUT',
        data: JSON.stringify(familyMember),
        contentType: 'application/json',
        success: function(jqXhr, textStatus, errorThrown) {
          console.log('Successfully updated family member');
          loadDataTable();
          resetForm();
          selectedMemberId = null; 
        },
        error: function(jqXhr, textStatus, errorThrown) {
          console.log(errorThrown);
        }
      });
    } else {
        $.ajax({
        url: 'http://localhost:8080/familymember',
        type: 'POST',
        data: JSON.stringify(familyMember),
        contentType: 'application/json',
        success: function(jqXhr, textStatus, errorThrown) {
          loadDataTable();
          resetForm();
        },
        error: function(jqXhr, textStatus, errorThrown) {
          console.log(errorThrown);
        }
      });
    }

    $('#createFamily')[0].reset();
  });

  $(document).on('click', '.delete-button', function() {
    var memberId = $(this).attr('data-id');

    $.ajax({
      url: 'http://localhost:8080/familymember/' + memberId,
      type: 'DELETE',
      success: function(jqXhr, textStatus, errorThrown) {
        console.log('Successfully deleted family member');
        loadDataTable();
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  });

  $(document).on('click', '.select-button', function() {
    selectedMemberId = $(this).attr('data-id');
    var id = $(this).closest('tr').find('td:eq(0)').text(); 
    var firstName = $(this).closest('tr').find('td:eq(1)').text();
    var secondName = $(this).closest('tr').find('td:eq(2)').text();
    var bDay = $(this).closest('tr').find('td:eq(3)').text();

    $('#ID').val(id);
    $('#firstName').val(firstName);
    $('#secondName').val(secondName);
    $('#bDay').val(bDay);
  });

  $('#updateButton').click(function() {
    var memberId = $('#ID').val(); 
    var firstName = $('#firstName').val();
    var secondName = $('#secondName').val();
    var bDay = $('#bDay').val();

    var updatedFamilyMember = {
      id: memberId, 
      firstName: firstName,
      secondName: secondName,
      bDay: bDay
    };

    if (selectedMemberId) {
      $.ajax({
        url: 'http://localhost:8080/familymember/' + selectedMemberId,
        type: 'PUT',
        data: JSON.stringify(updatedFamilyMember),
        contentType: 'application/json',
        success: function(jqXhr, textStatus, errorThrown) {
          console.log('Successfully updated family member');
          loadDataTable();
          resetForm();
          selectedMemberId = null;
        },
        error: function(jqXhr, textStatus, errorThrown) {
          console.log(errorThrown);
        }
      });
    } else {
      console.log("No selected member to update.");
    }
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
        { data: 'id' },
        { data: 'firstName' },
        { data: 'secondName' },
        { data: 'bDay' },
        {
          data: null,
          render: function (data, type, row) {
            return '<button class="delete-button" data-id="' + row.id + '"><img src="images/delete.png" alt="Delete"></button>' +
              '<button class="select-button" data-id="' + row.id + '">Select</button>';
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
    $('#ID').val('');
    $('#firstName').val('');
    $('#secondName').val('');
    $('#bDay').val('');
    selectedMemberId = null;
  }

  loadDataTable();
});
