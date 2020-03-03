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

function addTwoNumbers(argNumberOne, argNumberTwo) {
    "use strict";
     var numberOne = argNumberOne;
     var numberTwo = argNumberTwo; 
     return numberOne + numberTwo;
}
