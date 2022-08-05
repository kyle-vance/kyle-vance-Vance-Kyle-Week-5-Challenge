// Timer that updates in real time
setInterval(() => { $('#time').text(moment().format('MMMM Do YYYY, h:mm:ss a'));});

function setKey() {
    var grabID = $(this).parent().attr('id');
    localStorage.setItem(grabID, $('#' + grabID + ' textarea').val());
};

$('.saveBtn').on('click', setKey);
  
