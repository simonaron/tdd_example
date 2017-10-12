var assert = require('assert');
var Calculator = require('../src/Calculator');

var calculator = new Calculator();

describe('Calculator', function() {
  describe('#sum()', function() {
    it('should return 0 when no param', function() {
      assert.equal(calculator.sum(), 0);
    });
    it('should return 0 when param 0', function() {
        assert.equal(calculator.sum(0), 0);
    });
    it('should return 1 when param 1', function() {
        assert.equal(calculator.sum(1), 1);
    });
    it('should return 2 when param 2', function() {
        assert.equal(calculator.sum(2), 2);
    });
    it('should return 2 when params: 1, 1', function() {
        assert.equal(calculator.sum(1,1), 2);
    });
    it('should return 2 when params: 0, 2', function() {
        assert.equal(calculator.sum(0,2), 2);
    });
    it('should return 2 when params: -1, 3', function() {
        assert.equal(calculator.sum(-1,3), 2);
    });
    it('should return 4 when params: 1, 1, 1', function() {
        assert.equal(calculator.sum(1,1,1), 4);
    });
  });
});