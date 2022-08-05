
populateLocalStorage();
// Timer that updates in real time
setInterval(() => { $('#time').text(moment().format('MMMM Do YYYY, H:mm:ss a'));});

// Saves the item in local storage on click
function setKey() {
    var grabID = $(this).parent().attr('id');
    localStorage.setItem(grabID, $('#' + grabID + ' textarea').val());
};

$('.saveBtn').on('click', setKey);
//  Assigns the class to each field based on the time of day 
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
// Populates the time blocks with local storage date (if already entered)
function populateLocalStorage() {
    $('.time-block').each(function() {
        let getID = $(this).attr('id');
        $('#' + getID + ' textarea').text(localStorage.getItem(getID));
    });
}
