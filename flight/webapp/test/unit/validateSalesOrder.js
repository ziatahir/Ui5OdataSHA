function validateSalesDocNumber(SalOrdNumber) {
       "use strict";
       var status;
       if (salOrdNumber.toString().length > 9) {
            status = true;
        } else {
            status = false;
        }
        return status;
},
onValidate: function(oEvent) {
			if (!this.validateSalesDocNumber(oEvent.getSource().getValue())) {
				oEvent.getSource().setValueState("Error");
				MessageBox.error("Personnel number should be minimum 10 digits.");
			} else {
				oEvent.getSource().setValueState("Success");
			}
}

function addTwoNumbers(NumberOne, NumberTwo) {
    "use strict";
     return numberOne + numberTwo;
}
