//All of these are practice taken from EDABIT.COM unless they say Hackerrank.com
//Run with the command: node client.js

console.log("hello world")

//PROBLEM 1
// Get Word Count
// Create a function that takes a string and returns the word count.
//  The string will be a sentence.

// Examples
// countWords("Just an example here move along") ➞ 6

// countWords("This is a test") ➞ 4

// countWords("What an easy task, right") ➞ 5
// Notes
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
/////////////////////
//This function uses the str.split operator to split the array on the chosen spot"
function countWords(str) {
	let count = str.split(" ");
	return console.log(count.length);
}

countWords("Just an example here move along");
////////////////////////////////////////////////////////////////////
//Problem 2
// Write a function that returns true if a hash contains the specified key, and false otherwise.

// Examples
// hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false

// hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false

// hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true

///////////////////
// This uses the in operator to find see if a key is within an object
function hasKey(obj, key) {
	return console.log(key in obj);
}

hasKey({ a: 44, b: 45, c: 46 }, "d")
hasKey({ pot: 1, tot: 2, not: 3 }, "not")

/////////////////////////////////////////////////
// Problem 3  (From HackerRank)
//PROBLEM
//Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
    let total = 0;
    for (let i=0; i < ar.length;i++){
        total = total + ar[i];
    }
    return console.log(total);
}

simpleArraySum([1,2,3,4,10,11]);
