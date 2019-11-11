/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function (upper, lower, colsum) {
    function populate(upper, lower, colsum) {
        var arr = new Array(2).fill(0);
        arr = arr.map(i => new Array(colsum.length).fill(0));
        var swtch = false;
        var countUpper = 0;
        for (let i = 0; i < colsum.length; i++) {
            if (colsum[i] === 2) {
                arr[0][i] = 1;
                arr[1][i] = 1;
                countUpper++;
            } else if (colsum[i] === 1) {
                if (!swtch) {
                    arr[0][i] = 1;
                    countUpper++;
                } else {
                    arr[1][i] = 1;
                }
            }
            if (countUpper === upper) {
                swtch = true;
            }
        }
    }
    var countTwo = 0
    var sum = 0
    for (let i = 0; i < colsum.length; i++) {
        if (colsum[i] === 2) countTWo++;
        sum += colsum[i];
    }
    if ((upper >= countTwo && lower >= countTwo) && upper + lower === sum) {
        populate(upper, lower, colsum);
    } else {
        return [];
    }
};