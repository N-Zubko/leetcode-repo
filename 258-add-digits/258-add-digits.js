/**
 * @param {number} num
 * @return {number}
 */
const accumulate = num => {
    let accumulator = 0;
    let string;
    if ( typeof num !== "string") {
        string = num.toString();
    } else {
        string = num;
    };
    for (let i = 0 ; i < string.length ; i++) {
        accumulator = accumulator + parseInt(string[i]);
    }
    return accumulator;
}

var addDigits = function(num) {
    let result = accumulate(num);
    if (result >= 10) {
        do  {
        result = accumulate(result);
    } while (result >= 10)
    }
    return result;
};

console.log(addDigits(91));