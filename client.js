//All of these are practice taken from EDABIT.COM

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
Console.log("hello world")

function countWords(str) {
	let count = str.split(" ");
	return count.length;
}

countWords("Just an example here move along");
