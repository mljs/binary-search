/**
 * Performs a binary search of value in array
 * @param array - Array in which value will be searched. It must be sorted.
 * @param value - Value to search in array
 * @return {number} If value is found, returns its index in array. Otherwise, returns a negative number indicating where the value should be inserted: -(index + 1)
 */
function binarySearch(array, value) {
    var low = 0;
    var high = array.length - 1;

    while (low <= high) {
        var mid = (low + high) >>> 1;
        var midValue = array[mid];
        if (midValue < value) {
            low = mid + 1;
        } else if (midValue > value) {
            high = mid - 1;
        } else {
            return mid;
        }
    }

    return -(low + 1);
}

module.exports = binarySearch;
