const rotatePicture = require('../func/rotatePicture');
const chai = require('chai');
const expect = chai.expect;

describe('#PYCO Test 201908', () => {
  describe('#rotatePicture(grid, k)', () => {

    it('should throw exception when grid or k not provided', () => {
        expect(rotatePicture).to.throw(TypeError, 'params is required');
    });

    it('should throw exception when grid param is not array', () => {
        expect(() => {
            rotatePicture('foo', 1);
        }).to.throw(TypeError, 'grid must be array');
    });

    it('should throw exception when grid param is not interger >=0', () => {
        expect(() => {
            rotatePicture([], -1);
        }).to.throw(TypeError, 'k must be integer >= 0');
    })
  });
});