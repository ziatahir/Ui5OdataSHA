function validateSalesDocNumber(SalOrdNumber) {
       "use strict";
       var status;
       if (salOrdNumber.toString().length > 9) {
            status = true;
        } else {
            status = false;
        }
        return status;
}


function addTwoNumbers(NumberOne, NumberTwo) {
    "use strict";
     return numberOne + numberTwo;
}
