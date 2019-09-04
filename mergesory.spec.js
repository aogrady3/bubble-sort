/* eslint-disable no-undef */

describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here
      expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    });
    it('is able to split an odd-numbered array into two halves', function() {
      expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
    });
  });
  describe('Merge function', function() {
    it('is able to merge two sorted arrays into one sorted array', function() {
      // test the merging algorithm
      expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it('is able to merge two sorted length of uneven length into one sorted array', function() {
      expect(merge([1, 2, 3], [4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
    it('is able to merge single-element arrays', function() {
      expect(merge([2], [1])).toEqual([1, 2]);
    });
  });
  describe('MergeSort function', function() {
    it('sorts an array ', function() {
      expect(mergeSort([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it('sorts complex array', function() {
        expect(mergeSort([9,32,5435,4324,0])).toEqual([0,9,32,4324,5435])
    })
  });
  