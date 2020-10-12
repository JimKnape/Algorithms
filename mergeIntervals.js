/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
  const hasOverlap = (a, b) => a[1] >= b[0];
  const mergeTuple = (a, b) => [Math.min(a[0], b[0]), Math.max(a[1], b[1])];

  intervals.sort((a, b) => a[0] - b[0]);

  let i = 1;
  while (i < intervals.length) {
      if (hasOverlap(intervals[i - 1], intervals[i])) {
        intervals.splice(i - 1, 2, mergeTuple(intervals[i - 1], intervals[i]))
      } else {
        i += 1;
      }
  }
  return intervals;
};
