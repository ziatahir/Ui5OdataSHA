QUnit.test("Invalid Sales Document Number", function(assert) {
      "use strict";
     // assert.equal( true, validateSalesDocNumber(1234567890), "length is fine" );
      validateSalesDocNumberTestCase.call(this, assert, "1234567890", true);
});

QUnit.test("Invalid Sales Document Number", function(assert) {
      "use strict";
     // assert.equal( false, validateSalesDocNumber(134567890), "length is fine" );
      validateSalesDocNumberTestCase.call(this, assert, "134567890", false);
});



function validateSalesDocNumberTestCase(assert,salOrdNumber, fExpected) {
// pass the sales doc number
var fCreate = validateSalesDocNumber(salOrdNumber);
// Assert
assert.equal(fCreate, fExpected, salOrdNumber.concat(" has been validated."));
}
