/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let answer = [[], []];
    let temp = [];

let unique1 = nums1.filter((element) => nums2.indexOf(element) === -1);
let unique2 = nums2.filter((element) => nums1.indexOf(element) === -1);
let unique1filtered = unique1.filter((num, index) => {return unique1.indexOf(num) === index});
let unique2filtered = unique2.filter((num, index) => {return unique2.indexOf(num) === index});
 answer[0]=unique1filtered;
 answer[1]=unique2filtered;
 return answer;
};