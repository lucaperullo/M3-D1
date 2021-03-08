/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const calculateSum = (a, b) => {
  a == b ? (a + b) * 3 : a + b;
};
calculateSum(5, 5);
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const checkFifty = (a, b) => {
  (a || b) == 50 || a + b == 50 ? console.log(true) : console.log(false);
};
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeCharacter = (string, position) => {
  return string.slice(0, position) + string.slice(position + 1);
};
/*

4)
 Create a function to find the largest of three given integers.
*/
const findMax = (array) => {
  let max = Math.max(...array);
  return max;
};
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const rangee = (a, b) => {
  let ints = a && b;
  if (ints > 40 && ints < 60) {
    console.log(40 - 60);
  } else {
    if (ints > 70 && ints < 100) {
      console.log(70 - 100);
    }
  }
};
/*
    6) 
    
    Create a function to create a new string of specified copies (positive number) of a given string.
    */
const repeatString = (str, index) => {
  return str.repeat(index);
};
/*
    
    7)
    Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
    */
const dunnotbh = (str) => {
  let los = "Los";
  let ne = "New";
  if (str.contains(los)) {
    return los;
  } else if (str.contains(ne)) {
    return ne;
  } else console.log("");
};
/*
    8)
    Create a function to calculate the sum of three elements of a given array of integers of length 3.
    */
const reduceMethod = (array) => {
  return array.reduce(infinity);
};
/*
    
    9)
    Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
    */
const testContainedNum = (array) => {
  return array.includes(1 || 3);
};
/*
    
    10)
    
    Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
    */
const testContainer = (array) => {
  if (array.includes(1 || 3)) {
    console.log("1 or 3 are contained in the array");
  } else return false;
};
/*
    11)
    
    Create a function to find the longest string from a given array of strings.
    
    */
const getLongestText = (arr) =>
  arr.reduce(
    (savedText, text) => (text.length > savedText.length ? text : savedText),
    ""
  );

/*
    
    12)
    
    Create a function to find the types of a given angle.
    
    Types of angles:
        Acute angle: An angle between 0 and 90 degrees.
        Right angle: An 90 degree angle.
        btuse angle: An angle between 90 and 180 degrees.
        Straight angle: A 180 degree angle.
    */
const angleType = (angle) => {
  if (angle < 90) {
    return "Acute angle.";
  }
  if (angle === 90) {
    return "Right angle.";
  }
  if (angle < 180) {
    return "Obtuse angle.";
  }
  return "Straight angle.";
};
/*
    13)
    
    Create a function to find the index of the greatest element of a given array of integers
    */
const maxInt = (array) => {
  return array.sort((a, b) => b - a);
};
/*
    14)
    
    Create a function to get the largest even number from an array of integers.
    */
const maxEven = (array) => {
  array.sort((a, b) => b - a);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) return array[i];
  }
};
/*
    16)
    
    Create a function to check from two given integers, whether one is positive and another one is negative.
    */
const positiveOrNegative = (a, b) => {
  return Math.sign(a) && Math.sign(b);
};
/*
    17)
    
    Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
    */
const editString = (phrase) => {
  const splitPhrase = phrase.toUpperCase();
  const array = phrase.split(" ");
  const arrayOfWords = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i].split(" ");
    char[0] = char[0].toLowerCase();
    res.push(char.join(""));
  }
  return arrayOfWords.join(" ");
};
/*
    18)
    
    Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
    */
const calculateRange = (a, b) => {
  a + b >= 80 && a + b <= 50 ? console.log(65) : console.log(80);
};

/*
    19)
    
    Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
    
    If the number has 3 as a factor, output 'Diego'.
    If the number has 5 as a factor, output 'Riccardo'.
    If the number has 7 as a factor, output 'Stefano'.
    If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
    Examples
    28's factors are 1, 2, 4, 7, 14, 28.
    this would be a simple "Stefano".
    30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
    this would be a "DiegoRiccardo".
    34 has four factors: 1, 2, 17, and 34.
    this would be "34".
    */
const FizzBuzz = (x) => {
  let str = "";
  if (x % 3 === 0) {
    str = str + "Diego";
  }
  if (x % 5 === 0) {
    str = str + "Riccardo";
  }
  if (x % (5 || 3) === 0) {
    str = str + "DiegoRiccardo";
  }
  if (x % 7 === 0) {
    str = str + "stefano";
  }
  if (x % (3 || 7) === 0) {
    str = str + "DiegoStefano";
  }
  if (str.length === 0) {
    return String(x);
  }
  return str;
};
console.log(FizzBuzz(15));
/*
    20)
    Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
    */
const getAcronym = (phrase) => {
  // phrase.split(" ").map(singleWord => singleWord[0]).join("")
  phrase.split(" ").map((i) => i.charAt(0)); //Inherit case of each letter
  phrase
    .split(" ")
    .map((i) => i.charAt(0))
    .toUpperCase(); //Uppercase each letter
};
