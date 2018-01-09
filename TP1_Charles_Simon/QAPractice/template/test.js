let assert = require('assert');
let add = require('./add')

describe('Calculator', () => {
  describe('Adding nothing', () => {
    it('should return 0', function() {
      assert.equal(add(""), 0);
    })
  })

  // // Test template:
  // describe(<Put a short description of the test here>, () => {
  //   it(<describe the expected behavior>, function() {
  //     Put your assertions here
  //   })
  // })
  describe('Adding one number', () => {
      it('should return same number', function () {
          assert.equal(add("2"), 2);
      })
  })

  describe('Adding 2 numbers', () => {
      it('should return addition of two numbers', function () {
          assert.equal(add("2,3"), 5);
      })
  })

  describe('Adding 6 numbers', () => {
      it('should return addition of 6 numbers', function () {
          assert.equal(add("2,3,4,5,6,7"), 27);
      })
  })

  describe('Adding 3 numbers with new line', () => {
      it('should return addition of 3 numbers with new line instead of commas', function () {
          assert.equal(add("1\n2,3"), 6);
      })
  })

    describe('Adding 2 numbers with new line', () => {
        it('should return error because no second number', function () {
            
            assert.throws(() => add("1,\n"), new RegExp('NotANumberException'));
            //assert.throws(() => add("1,\n"), /NotANumberException/);
        })
    })

    describe('Adding 3 numbers with new delimiter', () => {
        it('should pass with ; delimiter', function () {

            assert.equal(add("//;\n1;2;3"), 6);
        })
    })
});
