/**
 * @param {number[]} nums
 * @return {number}
 */

/* 268. Missing Number: https://leetcode.com/problems/missing-number/

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

*/


var missingNumber = function(nums) {
  // i: an array of numbers
  // o: the missing number
  // c: in constant time if possible
  // e: if input array was empty

  // [3,0,1]
  

  
  // sort the nums array
  nums.sort((a, b) => a - b);
  // iterate over the sorted array
  for (let i = 0; i < nums.length; i++) {
        // if the value does not equal the index, return the index
      if (nums[i] !== i) {
        return i;
      }
  }
  return nums.length;
};