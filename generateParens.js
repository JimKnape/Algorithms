/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"] */

var generateParenthesis = function(n, openParens = 0, string = '', result = []) {
    if (string.length === n*2) {
        if (openParens === 0) {
            result.push(string);
        }
        return;
      } else {
        if (openParens > 0) {
          generateParenthesis(n, openParens + 1, string + "(", result);
          generateParenthesis(n, openParens - 1, string + ")", result);
        } else {
          generateParenthesis(n, openParens + 1, string + "(", result);
        }
      }
     
     return result;
        
    };