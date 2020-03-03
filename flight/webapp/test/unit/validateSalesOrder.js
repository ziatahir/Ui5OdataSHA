function validateSalesDocNumber( salOrdNumber ) {
       var status;
       if (salOrdNumber.toString().length > 9) {
            status = true;
        } else {
            status = false;
        }
        return status;
}

function addTwoNumbers( numberOne, numberTwo ) {
    return numberOne + numberTwo;
}