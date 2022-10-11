// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe('codeMsg',() => {
    it ("returns a coded message",() =>{
        const secretCodeWord1 = "Lackadaisical"
        const expectedOutput1 = "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        const expectedOutput2= "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        const expectedOutput3 = "3cc3ntr1c"

        expect(codeMsg(secretCodeWord1)).toEqual(expectedOutput1)
        expect(codeMsg(secretCodeWord2)).toEqual(expectedOutput2)
        expect(codeMsg(secretCodeWord3)).toEqual(expectedOutput3)
    })
})

// ● codeMsg › returns a coded message

// ReferenceError: codeMsg is not defined

// b) Create the function that makes the test pass.

// Create func called codeMsg  that takes in a str
// Create empty arr
// Split string and iterate through each item
// Swicth letters when its a vowel using conditional
// After iteration join str and return str

const codeMsg = (str) => {
    let newStrArr = []
    str = str.split('')
    for(let i = 0; i < str.length; i ++){
        if(str[i].toLowerCase() === "a"){
            newStrArr.push("4")
        } else if( str[i].toLowerCase() === "i"){
            newStrArr.push("1")
        } else if( str[i].toLowerCase() === "e"){
            newStrArr.push("3")
        } else if( str[i].toLowerCase() === "o"){
            newStrArr.push("0")
        } else{
            newStrArr.push(str[i])
        }
    }
    return newStrArr.join("")
}

// PASS  ./code-challenges.test.js
// codeMsg
//   ✓ returns a coded message (1 ms)

// Test Suites: 1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.


describe('wordWithLetter', () =>{

    it ("returns an array of all the words containing that particular letter", () => {

        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        const expectedOutput1 = ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        const expectedOutput2 = ["Cherry", "Blueberry", "Peach"]

        expect(wordWithLetter(fruitArray,letterA)).toEqual(expectedOutput1)
        expect(wordWithLetter(fruitArray,letterE)).toEqual(expectedOutput2)
    })
})

// ● wordWithLetter › returns an array of all the words containing that particular letter

// ReferenceError: wordWithLetter is not defined


// b) Create the function that makes the test pass.

// Create a func called wordWithLetter that takes in an array and a letter
// Create a empty arr
// Iterate though the arr and check each word if it contains the letter
// If true push word into new arr
// Return new arr

const wordWithLetter = (arr,ltr) => {

    let wordsWithLetterArr = []
    for(let i = 0 ; i < arr.length ; i++ ){
        arr[i].toLowerCase().includes(ltr) ? wordsWithLetterArr.push(arr[i]): null
    }
    return wordsWithLetterArr
} 

// PASS  ./code-challenges.test.js
// codeMsg
//   ✓ returns a coded message (2 ms)
// wordWithLetter
//   ✓ returns an array of all the words containing that particular letter

// Test Suites: 1 passed, 1 total
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.


describe("checkFullHouse", () => {

    it("determines whether or not the array is a Full House", () => {

        const hand1 = [5, 5, 5, 3, 3]
        const expectedOutput1 = true
        const hand2 = [5, 5, 3, 3, 4]
        const expectedOutput2 = false
        const hand3 = [5, 5, 5, 5, 4]
        const expectedOutput3 = false
        const hand4 = [7, 2, 7, 2, 7]
        const expectedOutput4 = true

        expect(checkFullHouse(hand1)).toEqual(expectedOutput1)
        expect(checkFullHouse(hand2)).toEqual(expectedOutput2)
        expect(checkFullHouse(hand3)).toEqual(expectedOutput3)
        expect(checkFullHouse(hand4)).toEqual(expectedOutput4)

    })
})
// ● checkFullHouse › determines whether or not the array is a Full House

// ReferenceError: checkFullHouse is not defined

// b) Create the function that makes the test pass.

// Create a func that takes in an array
// Create empty object
// Create a new 2 var to store card count
// Iterate through array and store count for card
// Push item into empty arr
// If next item is equal the item in new arr add count
// If not equal push into new arr and store new count
// Set conditional for count of 3 and 2 to make full house true
// return tre or false

// Update : I had to change up my approach used the forEach method to store items with duplicates
// Then access the object and set the count to arr 0 and 1
// Then set up conditoional to return true or false for full  house.

const checkFullHouse = (arr) => {

    let cardCountObj = {}
    let cardCount1 = 0
    let cardCount2 = 0
    let fullHouse = false
    arr.forEach(item =>{
        cardCountObj[item] = (cardCountObj[item] || 0) + 1
    })
    cardCount1 = Object.values(cardCountObj)[0]
    cardCount2 = Object.values(cardCountObj)[1]
    
    if(cardCount1 === 2 && cardCount2 === 3 ){
      fullHouse = true
      return fullHouse
    } else if (cardCount1 === 3 && cardCount2 === 2) {
      fullHouse = true
      return fullHouse
    } else {
      return fullHouse
    }
  }

//   PASS  ./code-challenges.test.js
//   codeMsg
//     ✓ returns a coded message (1 ms)
//   wordWithLetter
//     ✓ returns an array of all the words containing that particular letter
//   checkFullHouse
//     ✓ determines whether or not the array is a Full House (1 ms)

// Test Suites: 1 passed, 1 total