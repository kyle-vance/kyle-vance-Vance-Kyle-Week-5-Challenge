populateLocalStorage();

setInterval(() => { $('#time').text(moment().format('MMMM Do YYYY, H:mm:ss a'));});


function setKey() {
    var grabID = $(this).parent().attr('id');
    localStorage.setItem(grabID, $('#' + grabID + ' textarea').val());
};

$('.saveBtn').on('click', setKey);
  
function assignClass() {
    $('.time-block').each(function() {
        let timeID = parseInt($(this).attr('id'));
        let hour = moment().format('H');

        if (timeID > hour) {
            $(this).addClass('future');
        } 
        else if (timeID == hour) {
            $(this).addClass('present');
        } 
        else {
            $(this).addClass('past');
        }
    })
}
assignClass();

function populateLocalStorage() {
    $('.time-block').each(function() {
        let getID = $(this).attr('id');
        $('#' + getID + ' textarea').text(localStorage.getItem(getID));
    });
}
