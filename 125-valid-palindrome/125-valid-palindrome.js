/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleared = s.replace(/[^a-z0-9]/gi, '');

    let result = true;
    let half1, half2;
    
    half1 = cleared.slice(0, cleared.length/2).toLowerCase();;
    if (cleared.length % 2 === 0) {
        half2 = cleared.slice(cleared.length/2,cleared.length)
    }
    else  {
        half2 = cleared.slice((cleared.length/2)+1,cleared.length)
    }
    let reversedHalf2 = half2.split("").reverse().join("").toLowerCase();
    for (let i=0 ; i < half1.length ; i++) {
        if (half1[i] !== reversedHalf2[i]) {
            result = false;
            break;
        }
    }
    return result
};