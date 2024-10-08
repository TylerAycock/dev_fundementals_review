// For the following problems, please type out the answer
// to each problem instruction. Answers are expected to
// be valid JS code, unless stated otherwise.

// *** Problem 1 ***
//  Students should be familiar with and
//  know how to use a variety of string methods.

// 1.1a
//  Given a string, str1, find the third character
//  using a string method and save it to a new variable.

const str1 = "Howdy, there!";

let findChar = (str) => {
  return str.charAt(2);
};

console.log(findChar(str1));

// 1.2
//  Given a string, str2, make a new string that is an
//  all-caps version of it using a string method.

const str2 = "I forgot to turn off the oven!";

let allCap = (str) => {
  return str.toUpperCase();
};

console.log(allCap(str2));

// 1.3
//  Given a string, str3, make a new string that replaces
//  all of the occurences of that substring with another substring.

let str3 = "I love to eat apples and bananas";

//  changing all of the "a" substrings to "u" substrings

let changeLetters = (str, oldLetter, newLetter) => {
  return str.replace(oldLetter, newLetter);
};

console.log(changeLetters(str3, "a", "u"));

// *** Problem 2 ***
//  Students should know how to concatenate strings.

// 2.1
//  Log the following text:
//     My number 2's named "Johnny Paboni": and you don't want to mess!
//  You must use the variables provided to form the output string.
//  To accomplish this, use string concatenation.

const first = "Johnny";
const last = "Paboni";
const num = 2;
const phrase = "want to mess";

console.log(
  `My number ${num}'s named "${first} ${last}" and you don't ${phrase}`
);
