/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/


var rockPaperScissors = function(rounds) {
    // I: nothing
    // O: array of strings length 3
    // c: none
    // edge: none
  
    // create a throws array
    let throws = [];
    // create options array of s r and p 
    let options = 'rps';
    // declare innerunction that takes a string
    const innerFunc = (str) => {
      // if the string is length 3
      if (str.length === rounds) {
        // push string to throws array
        throws.push(str);
        // return
        return;
      } else {
      // otherwise, iterate thru options array
        for (let i = 0; i < options.length; i++) {
          // call innerfunction with string concatenated to current option
          innerFunc(str + options[i]);
        }
      }
    };
    //call innerfunction with empty string
    innerFunc('');
    // return [throws]
    return throws;
  };
  console.log(rockPaperScissors(3));