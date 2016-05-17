'use strict';

const should = require('should');
const binarySearch = require('..');

describe('binary search', function () {
    it('find value, even length', function () {
        searchAll([1, 6, 9, 12, 20, 45]);
    });

    it('find value, odd length', function () {
        searchAll([-12, -1, 0, 3, 20, 156, 387]);
    });

    it('value not found, even length', function () {
        var array = [1, 6, 9, 12, 20, 45];
        checkNotFound(array, 0, 0);
        checkNotFound(array, 4, 1);
        checkNotFound(array, 9.2, 3);
        checkNotFound(array, 50, 6);
    });

    it('value not found, odd length', function () {
        var array = [-12, -1, 0, 3, 20, 156, 387];
        checkNotFound(array, -50, 0);
        checkNotFound(array, -10, 1);
        checkNotFound(array, -0.4, 2);
        checkNotFound(array, 4, 4);
        checkNotFound(array, 50, 5);
        checkNotFound(array, 500, 7);
    });
});

function searchAll(array) {
    for (var i = 0; i < array.length; i++) {
        should(binarySearch(array, array[i])).equal(i);
    }
}

function checkNotFound(array, value, index) {
    should(binarySearch(array, value)).equal(-index - 1);
}
