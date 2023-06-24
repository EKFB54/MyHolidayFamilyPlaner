var prio = 1;

function updatePriorityValue(value) {
    $("#priority-value").get(0).innerText = value;
    prio = value;
}

function savePrio() {
    var member = parseInt($("#familyCardDropdown").get(0).value);
    var holiday = parseInt($("#holidayCardDropdown").get(0).value);
    prio = parseInt(prio);

    var prioData = {
        familyMember: member,
        holidayWish: holiday,
        priority: prio
    };


    $.ajax({
        url: 'http://localhost:8080/prio',
        type: 'POST',
        data: JSON.stringify(prioData),
        contentType: 'application/json',
        success: function() {
            
        },
        error: function(jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:8080/familymember',
        type: 'GET',
        success: function(data) {
            createDropdownFamily(data);
        },
        error: function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
        }
    });

    $.ajax({
        url: 'http://localhost:8080/holiday',
        type: 'GET',
        success: function(data) {
            createDropdownHoliday(data);
        },
        error: function(jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });

    function createDropdownFamily(data) {
        var dropDown = $('#familyCardDropdown');
        for(var i = 0; i < data.length; i++) {
            var member = data[i];
            dropDown.append(`<option value="${member.id}">${member.firstName} ${member.secondName}</option>`);
        }
    }

    function createDropdownHoliday(data) {
        var dropDown = $('#holidayCardDropdown'); 
        for(var i = 0; i < data.length; i++) {
            var urlaub = data[i];
            dropDown.append(`<option value="${urlaub.urlaubID}">${urlaub.land} - ${urlaub.ort}</option>`);
        }
    }
});