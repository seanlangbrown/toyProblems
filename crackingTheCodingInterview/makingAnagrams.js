// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

// Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

// Given two strings, and , that may or may not be of the same length, determine the minimum number of character deletions required to make and anagrams. Any characters can be deleted from either of the strings.

// Input Format

// The first line contains a single string, .
// The second line contains a single string, .

// Constraints

//     It is guaranteed that and consist of lowercase English alphabetic letters (i.e., through ).

// Output Format

// Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

// Sample Input

// cde
// abc

// Sample Output

// 4

// Explanation

// We delete the following characters from our two strings to turn them into anagrams of each other:

//     Remove d and e from cde to get c.
//     Remove a and b from abc to get c.

// We must delete characters to make both strings anagrams, so we print on a new line.


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function makeAnagrams(a, b) {
    
    var deletions = 0;
    var aCache = {};
    var bCache = {};
    if(!a || !b) {
        return null;
    }
    if (a === b) {
        return 0;
    }
    for (var i = 0; i < a.length; i++) {
        //cache letter
        var letter = a[i];
        if (aCache[letter]) {
            aCache[letter] = aCache[letter] + 1;
        } else {
            aCache[letter] = 1;
        }
    }
    for (var j = 0; j < b.length; j++) {
         //cache letter in b cache
        var letter = b[j];
        if (bCache[letter]) {
            bCache[letter] = bCache[letter] + 1;
        } else {
            bCache[letter] = 1;
        }

    }
    
    //console.log(aCache);
    //console.log(bCache);
    for (key in aCache) {
         if (!bCache[key]) {
            deletions += aCache[key];
        } else if (aCache[key] !== bCache[key]) {
            deletions += Math.max(aCache[key] - bCache[key], bCache[key] - aCache[key]);
        }
        //console.log(deletions);
    }
         
    for (key in bCache) {
        if (!aCache[key]) {
            deletions += bCache[key];
        }
        //console.log(deletions);
    }
         
    return deletions;
}

function main() {
    var a = readLine();
    var b = readLine();
    console.log(makeAnagrams(a, b));
}
