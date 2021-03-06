/**
 * @param {number[]} nums
 * @return {number}
 */

/* 268. Missing Number: https://leetcode.com/problems/missing-number/

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

*/


var missingNumber = function(nums) {
  // sum the values of num
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  // return the sum of nums - ((length of nums * length of nums plus 1) / 2)
  return ((nums.length * (nums.length + 1)/ 2)) - sum;
};