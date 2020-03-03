QUnit.test("Invalid Sales Document Number", function(assert) {
      assert.equal( true, validateSalesDocNumber(1234567890), "length is fine" );
});

QUnit.test("Invalid Sales Document Number", function(assert) {
      assert.equal( false, validateSalesDocNumber(134567890), "length is less" );
});

QUnit.test( "addTwoNumbers test", function( assert ) {
    assert.equal( 5, addTwoNumbers( 3, 2 ), "5, addTwoNumbers(3, 2); equal succeeds" );
});
