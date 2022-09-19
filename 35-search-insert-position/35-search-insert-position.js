/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    for (let i =0 ; i <= nums.length; i++) {
        if (nums[i] === target){
            return i;
        }
        if (nums[i] > target) {
            nums.splice(i, 0, target)
            return i;
        }
        
        if (i === (nums.length)) {
            nums.push(target)
            return i
        }

    
    
}
return nums;
};