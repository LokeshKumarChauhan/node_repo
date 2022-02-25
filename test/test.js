// test cases for add function 
describe( 'add', function() {
  it( 'should add 10 and 20', function() {
    assert( add( 10, 20 ) == 30 );
  });
});

describe( 'add', function() {
  it( 'should  add 10 and 20', function() {
    assert( add( 10, 20 ) != 40 );
  });
});



// test cases for sub function
describe( 'sub', function() {
  it( 'should sub 30 and 20', function() {
    assert( sub( 30, 20 ) == 10 );
  });
});

describe( 'sub 2', function() {
  it( 'should sub 30 and 20', function() {
    assert( sub( 1, 20 ) != -10 );
  });
});

//test cases for multiply function
describe( 'multiply', function() {
  it( 'should multiply 10 and 20', function() {
    assert( multiply( 10, 20 ) == 200 );
  });
});

describe( 'multiply', function() {
  it( 'should not multiply 10 and 0', function() {
    assert( multiply( 10, 0 ) != 20 );
  });
});

// test cases for divide
describe( 'divide', function() {
  it( 'should divide 100 and 20', function() {
    assert( divide( 100, 20 ) == 5 );
  });
});
describe( 'divide', function() {
  it( 'should not  divide 100 and0', function() {
    assert( divide( 100, 0 ) == Infinity );
  });
});


describe( 'arrow function ', function() {
  it( 'should add 100 and 20', function() {
    assert( myFunctionAdd( 100, 20 ) ==120 );
  });
});