/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

*/

var permute = function(nums, subarray=[], results=[]) { 
  if (nums.length === 0) {
    results.push(subarray);
    return;
  }  
  for (let i = 0; i < nums.length; i++) {
    let newArray = nums.slice();
    let current = newArray.splice(i, 1);
    permute(newArray, subarray.concat(current), results);
  }    
  return results;
};