//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 



//your code...
function isEmptyStr(str){
    return (!str || 0 === str.length);
}
console.log(isEmptyStr());
/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 
//your code...


let myString = "I love all dogs!";
let res = myString.replace(/all/g, "my");
console.log(myString);
console.log(res);



/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 



//your code...

let arr = [1,2,3,4,5];
let squares = arr.map(x => x * x);
console.log(squares);




/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.



//your code...

const myArray = [1,3,5,7,9,1,3,5].filter((x)=> {return x > 3;});
console.log(myArray);




/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 



//your code...

const arr1 = [1,4,6,8,9];
const arrSum = arr1.reduce((a,b) => a + b, 0);
console.log(arrSum);





/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  




//your code...

function dnaPair(koalaStr){
    //return each strand as an array
const paired = [];
//fucntion to check with strand to pair
const search = function(char){
    switch(char){
        case "A":
            paired.push("T");
            break;
        case "T":
            paired.push("A");
            break;
        case "C":
            paired.push("G");
            break;
        case "G":
            paired.push("C");
            break;
    }
};
//loops through input and pair
for (let i = 0; i <koalaStr.length; i++){
    search(koalaStr[i]);
}
return paired;
}
console.log(dnaPair("GCG CCA GTC CCT CTA GAA GAC TGA"));




/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

function maxNumber(numbers) {
    //your code here
    //Amir did this one for us
    const truthys = numbers.filter(el => el);
    const primatives = truthys.filter(n => typeof n != 'object');
    const noBools = primatives.filter(p => typeof p != 'boolean');
    const numStrings = ["zero", "one", "two", "three"];
    const numWithStrings = noBools.map(nb => numStrings.includes(nb) ? numStrings.indexOf(nb) : nb);
    const numWithStrings2 = numWithStrings;
    numWithStrings2[24] = Number (numWithStrings[24]);
    const nums = numWithStrings2.filter(n => typeof n != 'string');
    return Math.max(...nums);
};
console.log(maxNumber());

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    points.sort(function(a,b){return b-a});
};
console.log(sortNums());




/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({company : "TEKsystems"},"object");


console.log(mapObj.has({company : "TEKsystems"}));  
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.
console.log(ones.reverse());

/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function performer(cb) {
    //code goes here
    this.cb = cb;
}
Thing.prototype.doSomething = function (callback){
    callbacl.call(this);
}
function foo(){
    console.log(this.cb);
}
const t = new cb ('Sarah');
t.doSomething(foo);

/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.
