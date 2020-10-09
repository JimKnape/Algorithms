/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/* 56. Merge Intervals https://leetcode.com/problems/merge-intervals/

Given a collection of intervals, merge all overlapping intervals.


Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

var merge = function(intervals) {
  // I: an array of arrays length 2 - called intervals
  // O: an array of arrays length 2
  // C: n/a
  // e: be aware of empty arrays

  const hasOverlap = (a, b) => a[1] >= b[0];
  const mergeTuple = (a, b) => [Math.min(a[0], b[0]), Math.max(a[1], b[1])];

  intervals.sort((a, b) => a[0] - b[0]);
//[[1,3],[1,10],[2,6],[8,10],[15,18]]
// [1,10][2,6],[8,10],[15,18]
// [1,10][8,10],[15,18]

  let i = 1;
  while (i < intervals.length) {
      if (hasOverlap(intervals[i - 1], intervals[i])) {
        intervals.splice(i - 1, 2, mergeTuple(intervals[i - 1], intervals[i]))
      } else {
        i += 1;
      }
  }
  return intervals;

  /*
   sort intervals ascending 
   helper function hasOverlap that checks for overlap of two tuples 
   helper function that merges two tuples

   create a result array
   [1,6][8,10],[15,18]

   [[1,3],[2,6],[8,10],[15,18]]
                           
   create hasMerge boolean set to false
   while there is a merge in the iteraion, repeat                        
   iterate thru array 
     if hasOverlap on the intervals[i] and intevals[i - 1]
       call merge with intervals[i] and intevals[i - 1]
       push the tuple to the result array
       set hasMerge to true
     else push tuple to result array 
    
     resultArray
  */

};

console.log(merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]))
