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
// function countWords(str) {
// 	let count = str.split(" ");
// 	return console.log(count.length);
// }

// countWords("Just an example here move along");
////////////////////////////////////////////////////////////////////
//Problem 2
// Write a function that returns true if a hash contains the specified key, and false otherwise.

// Examples
// hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false

// hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false

// hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true

///////////////////
// This uses the in operator to find see if a key is within an object
// function hasKey(obj, key) {
// 	return console.log(key in obj);
// }

// hasKey({ a: 44, b: 45, c: 46 }, "d")
// hasKey({ pot: 1, tot: 2, not: 3 }, "not")

/////////////////////////////////////////////////
// Problem 3  (From HackerRank)
//PROBLEM
//Given an array of integers, find the sum of its elements.

// function simpleArraySum(ar) {
//     let total = 0;
//     for (let i=0; i < ar.length;i++){
//         total = total + ar[i];
//     }
//     return console.log(total);
// }

// simpleArraySum([1,2,3,4,10,11]);

//Problem 4 (From Hackerank)
// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.
// function compareTriplets(a, b) {
//     let alice = 0;
//     let bob = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             alice++;
//         } else if (a[i] < b[i]) {
//             bob++;
//         } else if (a[i] = b[i]) {
//         }
//     }
//     return console.log([alice,bob]);
// }
// compareTriplets([5,6,7],[3,6,10]);
// /////////////////
// Problem 5 (hackerank)
// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Function Description

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// int ar[n]: an array of integers .
// Return

// int: the sum of all array elements

// function aVeryBigSum(ar) {
//     let sum = 0;
//     for (let i = 0; i < ar.length; i++) {
//         sum = sum + ar[i];
//     }
//     return console.log(sum);
// }

// aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]);

/////////////////////////////
// Problem:  Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
// function plusMinus(arr) {
//     let zero = 0;
//     let negative = 0;
//     let positive = 0;
//     let total = arr.length;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             zero++;
//         } else if (arr[i] > 0) {
//             positive++;
//         } else if (arr[i] < 0) {
//             negative++;
//         }
//     }
//    zero = (zero/total).toFixed(6);
//    positive = (positive/total).toFixed(6);
//    negative = (negative/total).toFixed(6);
//    console.log (zero);
//    console.log(positive);
//    console.log(negative);
// }

// plusMinus([-4, 3, -9, 0, 4, 1 ]);

////////////////////////////////////////////////
// Consider a staircase of size :

//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// function staircase(n) {
//     for (let i=0; i < n; i++) {
//         let line = "";
//         for (let y=1; y<n+1; y++) {
//             if (y >= n - i) {
//                 line = line + "#";
//            } else {
//                 line = line + " ";
//             }   
//             }
//             console.log(line);
//         }
//     }

//     staircase(6);

    /////////////////////////////

    // Given five positive integers, 
    // find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
    // Then print the respective minimum and maximum values as a single line of two space-separated long integers.

    // Complete the miniMaxSum function below.
// function miniMaxSum(arr) {
//     let sum = 0
//     for (let i=0; i<arr.length; i++) {
//         sum = sum + arr[i];
//         console.log("sum", sum);
//     }
//     let min = sum;
//     let max = 0;
//     for (let y=0; y < arr.length; y++ ) {
//         if (sum - arr[y] > max) {
//             max = sum - arr[y]
//             console.log("max", max);
//         }
//         if (sum - arr[y] < min) {
//             min = sum-arr[y]
//             console.log("min",min);
//         }
//     }
    

//     return console.log (min,max)
// }

// miniMaxSum([1,2,3,4,5]);
    
/////////////////////////////////////////////
// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out  candles successfully, since the tallest candles are of height  and there are  such candles.

// function birthdayCakeCandles(ar) {
//     let biggest = 0;
//     let num = 0
//     for (let i=0; i < ar.length; i++) {
//         if (ar[i] > biggest) {
//             biggest = ar[i]
//         }
//     }
//     for (let y=0; y < ar.length; y++) {
//         if (ar[y] === biggest) {
//             num++;
//         }
//     }
//     console.log(num);
// }
// birthdayCakeCandles([1,1,1,1,1,1]);

///////////////////////////////////////
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// sample input 07:05:45PM

// function timeConversion(s) {
//     let hh = s[0]+s[1];
//     if ((s[8] === "A") && (hh === "12")) {
//         hh = "00"
//     }
//     if (s[8] === "P") {
//         if (hh === "12") {
//             hh = "12"
//         } else {
//         hh = Number(hh)+12;
//         }
//     }
    
//     return hh+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
// }   

// timeConversion([0,7,":",0,5,":",4,5,"P","M"]);

// ///////////////////////////
// In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

// Task

// Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

// function vowelsAndConsonants(s) {
//     for (let i = 0; i < s.length; i++) {
//         if ((s[i] == "a") || (s[i] == "e") || (s[i] == "i")|| (s[i] == "o")|| (s[i] == "u")) {
//             console.log(s[i])
//         }
//     }
//     for (let i = 0; i < s.length; i++) {
//         if ((s[i] == "b") || (s[i] == "c") || (s[i] == "d") || (s[i] == "f") || (s[i] == "g") || (s[i] == "h") || (s[i] == "j") || (s[i] == "k") || (s[i] == "l") || (s[i] == "m") || (s[i] == "n") || (s[i] == "p") || (s[i] == "q") || (s[i] == "r") || (s[i] == "s") || (s[i] == "t") || (s[i] == "v") || (s[i] == "w") || (s[i] == "x") || (s[i] == "y") || (s[i] == "z"))  {
//             console.log(s[i])
//         }
//     }
// }
// //this was a trash way to write this, I should have just done another array for vowels and aphabets

// vowelsAndConsonants (["j","a","v","a","s","c","r","i","p","t","l","o","o","p","s"])

///////////////////////////
// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

// Complete the countApplesAndOranges function below.
// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     let appleCount = 0;
//     let orangeCount = 0;
//     for (let i = 0; i < apples.length; i++) {
//         if ((apples[i]+a >= s) && (apples[i]+a <= t)) {
//             // console.log(apples);
//             // console.log("in appleCount and current apple array is", apples[i])
//             appleCount = appleCount + 1;
//         }
//     }
//     for (let y = 0; y < oranges.length; y++) {
//         if ((oranges[y]+b >= s) && (oranges[y]+b <= t)) {
//             // console.log(oranges);
//             // console.log("in orangeCount and current orange array is", orange[y])
//             orangeCount++;
//         }
//     }
//      console.log(appleCount);
//      console.log(orangeCount);
// }

// countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])

///////////////////////////////////////////?


// Function Description

// Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

// kangaroo has the following parameter(s):

// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    let answer = "NO";
    for (let i = 0; i < 100; i++) {
        x1 = x1+v1;
        x2 = x2+v2;
        if (x1 === x2) {
            answer = "YES";
        }
    }
console.log(answer);
}

kangaroo(0,2,5,3);