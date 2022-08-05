// Timer that updates in real time

setInterval(() => { $('#time').text(moment().format('MMMM Do YYYY, H:mm:ss a'));});

function setKey() {
    var grabID = $(this).parent().attr('id');
    localStorage.setItem(grabID, $(grabID + ' textarea').val());
    assignClass();
};

$('.saveBtn').on('click', setKey);
  
function assignClass() {
    $('.time-block').each(function() {
        let timeID = parseInt($(this).attr('id'));
        let hour = moment().format('H');

        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');

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
