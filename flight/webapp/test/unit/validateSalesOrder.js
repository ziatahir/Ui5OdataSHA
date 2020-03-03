/* eslint-disable */

function validateSalesDocNumber( salOrdNumber ) {
       "use strict";
       var status;
       if (salOrdNumber.toString().length > 9) {
            status = true;
        } else {
            status = false;
        }
        return status;
}

function addTwoNumbers( numberOne, numberTwo ) {
    "use strict";
    return numberOne + numberTwo;
}
