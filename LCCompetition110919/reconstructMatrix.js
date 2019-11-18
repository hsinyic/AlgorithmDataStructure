/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function (upper, lower, colsum) {
    var arr = new Array(2).fill(0);
    arr = arr.map(i => new Array(colsum.length).fill(0));
    function populate() {
        var swtch = false;
        upper = upper - countTwo;
        for (let i = 0; i < colsum.length; i++) {
            if (colsum[i] === 1)
                if (upper > 0) {
                    arr[0][i] = 1;
                    upper--;
                } else {
                    arr[1][i] = 1;
                }
        }
        return arr;
    }

    var countTwo = 0
    var sum = 0
    for (let i = 0; i < colsum.length; i++) {
        if (colsum[i] === 2) {
            countTwo++;
            arr[0][i] = 1;
            arr[1][i] = 1;
        }
        sum += colsum[i];
    }
    if ((upper >= countTwo && lower >= countTwo) && upper + lower === sum) {
        return populate();
    } else {
        return [];
    }
};

debugger;
reconstructMatrix(5, 5, [2, 1, 2, 0, 1, 0, 1, 2, 0, 1])

