var twoSum = function(nums, target) {
    var output = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = 1; j < nums.length && j !== i; j++) {
      if (target - nums[i] === nums[j]) {
          output.push(i, j)
          return output
      }

}    
};
}
