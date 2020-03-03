function validateSalesDocNumber(argSalOrdNumber) {
       "use strict";
       var status;
       var salOrdNumber = argSalOrdNumber;
       if (salOrdNumber.toString().length > 9) {
            status = true;
        } else {
            status = false;
        }
        return status;
}

function addTwoNumbers(numberOne, numberTwo) {
    "use strict";
    return numberOne + numberTwo;
}
