//1
const product = 8 * 10;
//2
const quotient = 66 / 33;
//3
let myVar = 87;

// Змініть код лише під цим рядком
myVar++;
//4
let myVar = 11;

// Змініть код лише під цим рядком
myVar--;
//5
const ourDecimal = 5.7;

// Змініть код лише під цим рядком
var myDecimal = 1.1;
//6
const product = 2.0 * 2.5;
//7
const quotient = 4.4 / 2.0; // Змініть цей рядок
//8
const remainder = 11 % 3;
//9
let a = 3;
let b = 17;
let c = 12;

// Змініть код лише під цим рядком
a += 12;
b += 9;
c += 7;
//10
let a = 11;
let b = 9;
let c = 3;

// Змініть код лише під цим рядком
a -= 6;
b -= 15;
c -= 1;
//11
let a = 5;
let b = 12;
let c = 4.6;

// Змініть код лише під цим рядком
a *= 5;
b *= 3;
c *= 10;
//12
let a = 48;
let b = 108;
let c = 33;

// Змініть код лише під цим рядком
a /= 12;
b /= 4;
c /= 11;
//13
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// Змініть цей рядок
//14
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
//15
const stringToNumber = function(str){
    var a = str
    a = Number(str);
    return a;
  }
//16
function greet (name, owner) {
    if (name == owner) {
    return "Hello boss";
  }
    return "Hello guest";
}
//17
function makeUpperCase(str) {
    let result = str.toUpperCase();
    return result
  }
//18
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
//19
const myStr = "This is the start" + " " + "This is the end."; // Change this line
//20 
let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";
//21
onst myName = "Pavel";
const myStr = "My name is " + myName + "and I am well!";
//22
const someAdjective = "My cat is cool";
let myStr = "Learning to code is ";
myStr += someAdjective;
//23
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
//24
let firstLetterOfLastName = "";
const lastName = "Lovelace";


// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
//25
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
//26
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
//27
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
//28
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
//29
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
//30
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "My " + myAdjective + " " + myNoun + " really " + myAdverb + " "+  myVerb;// Change this line
// Only change code above this line
//31
// Only change code below this line
const myArray = ["srtoka", 45];
//32
// Only change code below this line
const myArray = [["stroka"],[45,"stroka"]];
//33
const myArray = [50, 60, 70];
var myData = myArray[0];
//34
// Setup
const myArray = [18, 64, 99];
myArray[0] = 45;
// Only change code below this line
//35
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
//36
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog",3])
//37
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();
//38
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();
//39
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
//40
const myList = [["milk", 15],["bread", 5],["butter", 2],["coffee", 11],["vine", 7]];
//41
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
//42
function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}
functionWithArgs(1,2);
functionWithArgs(7,9);
//43
function timesFive(num) {
  return num * 5;
}
//44
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//45
function myLocalScope() {
  // Only change code below this line
  var myVar = 1;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
//46
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
//47
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
//48
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
// Only change code below this line
//49
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false"


  // Only change code above this line
//50
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
}
//51
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
//52
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
//53
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
//54
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
//55
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
//56
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val>= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
//57
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
//58
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
//59
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >=25) {
    
      return "Yes";
    
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
//60
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
//61
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);