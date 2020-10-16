/**
 * @param {number[]} height
 * @return {number}
 */


/* 42. Trapping Rain Water
https://leetcode.com/problems/trapping-rain-water/

Helpful animation of this prompt: https://youtu.be/HmBbcDiJapY?t=51


Given n non-negative integers representing an elevation map where
the width of each bar is 1, compute how much water it is able to trap
after raining.


VIEW ELEVATION MAP ON LEETCODE



Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/


var trap = function(height) {
    let len = height.length;
    let rightWallIndex = height[len - 1];
    let leftWallIndex = height[0];
      
    const findRightWall = (currentIndex) => {
      let rightWall = height[len - 1];
      for (let i = len - 2; i > currentIndex; i--) {
        if (height[i] > rightWall) {
          rightWall = height[i];
          rightWallIndex = i;
        }
      }
      return rightWall
    }
  
    const findLeftWall = (currentIndex) => {
      let leftWall = height[0];
      for (let i = 1; i < currentIndex; i++) {
        if (height[i] > leftWall) {
          leftWall = height[i];
          leftWallIndex = i;
        }
      }
      return leftWall
    }
  
    let result = 0;
    for (let i = 1; i < len - 1; i++) {
      let leftWall = findLeftWall(i);
      let rightWall = findRightWall(i);
      let tempWater = Math.min(leftWall, rightWall) - height[i];
      if (tempWater > 0) {
        result += tempWater;
      }
    }
    return result;  
};
