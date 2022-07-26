/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [];
    console.log(nums.length)
    for (let i = 0; i < nums.length; i++) {
  ans[i] = nums[i];
    }
        for (let i = 0; i < nums.length; i++) {
           ans.push(nums[i])
        } 
     
    
    return ans;
};