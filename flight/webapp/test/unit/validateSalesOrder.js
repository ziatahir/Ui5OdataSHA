function validateSalesDocNumber(argSalOrdNumber) {
       "use strict";
       var status;
       var salOrdNumber = this.argSalOrdNumber;
       if (salOrdNumber.toString().length > 9) {
            status = true;
        } else {
            status = false;
        }
        return status;
}

function addTwoNumbers(argNumberOne, argNumberTwo) {
    "use strict";
     var numberOne = this.argNumberOne;
     var numberTwo = this.argNumberTwo; 
     return numberOne + numberTwo;
}
