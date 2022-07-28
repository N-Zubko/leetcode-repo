/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let result = [];
    const subarray1 = nums.slice(0,nums.length/2)
    const subarray2 = nums.slice(nums.length/2, nums.length)
    console.log(subarray1)
    console.log(subarray2)
    if (subarray1.length === subarray2.length) {
        for ( let i = 0; i < subarray1.length ; i++) {
            result.push(subarray1[i]);
            result.push(subarray2[i])

        }
    }
 return result;
};