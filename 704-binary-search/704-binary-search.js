/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    //define start and end index
    let startIndex= 0 ;
    let endIndex = nums.length-1;
    
    //while startInex is less or equal to endIndex
    
    while (startIndex <= endIndex) {
        //define middle index
        let middleIndex = Math.floor((startIndex+endIndex)/2);

        //middle index and target to match
        if (target === nums[middleIndex]){
            return middleIndex;
        }
        
        //Check right side
        
        if (target > nums[middleIndex]) {

            startIndex=middleIndex + 1;
        
        }
        
        //Check left side
        
        if(target < nums[middleIndex]){
            endIndex= middleIndex -1;
        }
        
        else {
            console.log("not found");
        }
        
    }
    return -1;
    
};