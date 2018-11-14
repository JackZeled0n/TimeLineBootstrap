(function() {
    'use strict';
    
    var tables = document.getElementsByTagName("table");
   

    var firstTableAfter = tables[0];
    // var row = $(this).closest('table').children('tr:first');

    agregarClases();

})();

function agregarClases() {
    'use strict';

    // $('#tabla tr:last').find('td:first').addClass('wait');
    $('#tabla tr:last').addClass('wait');
    ($('#tabla tr').eq(1)).removeClass('wait');    
    ($('#tabla tr').eq(1)).addClass('ok');    

}