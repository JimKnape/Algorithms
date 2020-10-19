/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/* 704. Binary Search: https://leetcode.com/problems/binary-search/

Given a sorted (in ascending order) integer array nums of n elements and a
target value, write a function to search target in nums. If target exists,
then return its index, otherwise return -1.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4


Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Note:

You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].

*/


var search = function(nums, target) {
  // I: an array of integers, and a target integer 
  // O: the index of the target, or -1 if not found
  // C: no constraints, other than the range inputs of the integers and the length of the array
  // E: 

  //visualization
  /*
  Max = nums[length -1]
  Min = nums[0]
  find middle of the array, round down
    check to see if middle value is less than target
    then the right side of the array is where the binary search will continue

  [-1,0,3,5,9,12]

  */

  //psuedo code
    //create Max = length - 1
    //create Min = 0
    
    //while min is less than max
      // create midpoint = Math.floor(max + min / 2 ) 
      // check if midpoint value is less than target 
        // set min to midpoint + 1
      // otherwise max to midpoint 
    
    //if nums[max] === target
      // return max
    //otherwise return -1
  
  let maxIdx = nums.length - 1; 
  let minIdx = 0;

  while (minIdx < maxIdx) {
    let mpIdx = Math.floor((maxIdx + minIdx) / 2);
    if (nums[mpIdx] < target) {
      minIdx = mpIdx + 1;
    } else {
      maxIdx = mpIdx;
    }
  }

  if (nums[maxIdx] === target) {
    return maxIdx;
  } else {
    return -1;
  }


};