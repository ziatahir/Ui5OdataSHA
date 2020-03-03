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
