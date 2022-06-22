/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x > 0) {
    let y = x.toString();
              let accumulator = 0;
              let middle = Math.floor(y.length/2)
        for (let i = 0; i < middle; i++) {
            if (y[i] === y[y.length-i-1]) {
              accumulator+=1;
            } 
            
        }
        if (middle === accumulator) {
              return true 
            } else {return false}
    
    } else if (x === 0) {return true }
    else {
        return false
    } 
};