const rotatePicture = require('../func/rotatePicture');
const chai = require('chai');
const expect = chai.expect;

describe('#PYCO Test 201908', () => {
  describe('#rotatePicture(grid, k)', () => {

    it('should throw exception when grid or k not provided', () => {
        expect(() => {
            rotatePicture();
        }).to.throw(TypeError, 'params is required');
    });

    it('should throw exception when grid param is not array', () => {
        expect(() => {
            rotatePicture('foo', 1);
        }).to.throw(TypeError, 'grid must be array');
    });

    it('should throw exception when grid param is not interger >=0', () => {
        expect(() => {
            rotatePicture([[1]], -1);
        }).to.throw(TypeError, 'k must be integer >= 0');
    });

    it('should throw exception when grid is not n*n matrix', () => {

        // case empty grid
        expect(() => {
            rotatePicture([
                []
            ], 0);
        }).to.throw(RangeError);

        // case row > col
        expect(() => {
            rotatePicture([
                [3],
                [1]
            ], 0);
        }).to.throw(RangeError);

        // case col > row
        expect(() => {
            rotatePicture([
                [3, 2]
            ], 0);
        }).to.throw(RangeError);
        
        // case number of item in rows not equal
        expect(() => {
            rotatePicture([
                [3, 2],
                [3, 4, 5]
            ], 0);
        }).to.throw(RangeError);
    });

    // rotate_case_0 : k%4 = 0 (k = 0)
    it('should return success result in rotate_case_0 (k = 0)', () => {
        let result =  rotatePicture([
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ], 0);
        expect(result).to.deep.equal([
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ]);
    });
    it('should return success result in rotate_case_0 (k = 4)', () => {
        let result =  rotatePicture([
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ], 4);
        expect(result).to.deep.equal([
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ]);
    });

    // rotate_case_1 : k%4 = 1 (k = 1)
    it('should return success result in rotate_case_1 (k = 1)', () => {
        let result =  rotatePicture([
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ], 1);
        expect(result).to.deep.equal([
            [0, 8, 0],
            [0, 128, 16],
            [0, 32, 255]
        ]);
    });
    it('should return success result in rotate_case_1 (k = 5)', () => {
        let result =  rotatePicture([
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ], 5);
        expect(result).to.deep.equal([
            [0, 8, 0],
            [0, 128, 16],
            [0, 32, 255]
        ]);
    });

    // rotate_case_2 : k%4 = 2
    it('should return success result in rotate_case_2 (k = 2)', () => {
        let result =  rotatePicture([
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ], 2);
        expect(result).to.deep.equal([
            [0, 0, 0],
            [32, 128, 8],
            [255, 16, 0]
        ]);
    });
    it('should return success result in rotate_case_2 (k = 6)', () => {
        let result =  rotatePicture([
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ], 6);
        expect(result).to.deep.equal([
            [0, 0, 0],
            [32, 128, 8],
            [255, 16, 0]
        ]);
    });

    // rotate_case_3 : k%4 = 3
    it('should return success result in rotate_case_3 (k = 3)', () => {
        let result =  rotatePicture([
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ], 3);
        expect(result).to.deep.equal([
            [255, 32, 0],
            [16, 128, 0],
            [0, 8, 0]
        ]);
    });
    it('should return success result in rotate_case_3 (k = 7)', () => {
        let result =  rotatePicture([
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ], 7);
        expect(result).to.deep.equal([
            [255, 32, 0],
            [16, 128, 0],
            [0, 8, 0]
        ]);
    });
  });
});