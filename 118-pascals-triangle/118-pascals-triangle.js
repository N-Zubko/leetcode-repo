/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];

    if (numRows === 0) {result = [];}
    else if (numRows === 1) {result = [[1]];}
    else {    for (let row = 1; row <= numRows; row++) {
        let newRow = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 ) {
                newRow.push(1);
            } else if (col === row - 1)
            {
                newRow.push(1);
            }
            else {
                newRow.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        result.push(newRow);
    }}

    return result;
}