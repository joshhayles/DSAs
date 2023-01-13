
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

// test_00:
// anagrams('restful', 'fluster'); // -> true
// test_01:
// anagrams('cats', 'tocs'); // -> false
// test_02:
// anagrams('monkeyswrite', 'newyorktimes'); // -> true
// test_03:
// anagrams('paper', 'reapa'); // -> false
// test_04:
// anagrams('elbow', 'below'); // -> true
// test_05:
// anagrams('tax', 'taxi'); // -> false
// test_06:
// anagrams('taxi', 'tax'); // -> false
// test_07:
// anagrams('night', 'thing'); // -> true
// test_08:
// anagrams('abbc', 'aabc'); // -> false
// test_09:
// anagrams('po', 'popp'); // -> false
// test_10:
// anagrams('pp', 'oo') // -> false


const anagrams = (s1, s2) => {

// Initialize an empty count object to store keys and values    
    let count = {};

// Loop through first string. If character is not in count, initialize the count to zero. Then, increment the character count by 1:

    for (let char of s1) {
        if (!(char in count)) {
            count[char] = 0;
        }
        count[char] += 1;
    }

// Loop through second string. If the character is in the count object, decrement its numerical count by 1. * The reason for this is because you can't compare two objects for equality in JavaScript.* The idea, in this case is to look for equality by seeing if the character's numerical count equals zero after being decremented. So, if the character from s2 is in the count object, that means it has potential for an equality match. If the character is NOT in the count object, you can return false:

    for (let char of s2) {
        if (char in count) {
            count[char] -= 1;
        } else {
            return false;
        }
    }

// Loop through the count object and determine if any of the character's numerical counts are NOT equal to zero. If so, return false because it can not be a potential match for equality:

    for (let char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }

// If it makes it here, you can return true:

    return true;
}; 

console.log(anagrams('cats', 'tocs')); // => false