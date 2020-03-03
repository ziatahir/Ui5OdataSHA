QUnit.test("Invalid Sales Document Number", function(assert) {
      "use strict";
      assert.equal( true, validateSalesDocNumber(1234567890), "length is fine" );
});

QUnit.test("Invalid Sales Document Number", function(assert) {
      "use strict";
      assert.equal( false, validateSalesDocNumber(134567890), "length is fine" );
});

QUnit.test( "addTwoNumbers test", function( assert ) {
    "use strict";
    assert.equal( 5, addTwoNumbers( 3, 2 ), "5, addTwoNumbers(3, 2); equal succeeds" );
});



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
