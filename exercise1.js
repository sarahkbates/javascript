//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...

function cToF(celcius){
    let cTemp = celcius;
    let cToFahr = cTemp * 9/5 + 32;
    return(cToFahr);
}
console.log(cToF(100));

function fToC(fahrenheit){
    let fTemp = fahrenheit;
    let fToCel = (fTemp - 32) * 5/9;
    return (fToCel);
}
console.log(fToC(100));






/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...

function voteable(ageOfVoter){
    let age = ageOfVoter;
    let ans = 'No';
    if (age >= 18){
        ans = 'Yes';
       
}
return (ans);

}
console.log(voteable(13));






//************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...

string_to_array = function (str){
    return str.trim().split(" ");
}
console.log(string_to_array("The five boxing wizards jump quickly"));

arrayToString = function(arr){
    return arr.join(" ");
}
console.log(arrayToString(string_to_array("The five boxing wizards jump quickly")));







/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...

function reverse_telephone(n){
   n = n + "";
   return n.split("").reverse().join("");
}
console.log(reverse_telephone(4693183038));





/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...


let car = {
make: 'Hyundai',
model: 'Tuscon',
year: 2017,
color: "White",
myCar: function(){
    return this.make + " " + this.model + " " + this.year + " " + this.color
}
}
console.log(car.myCar());




//************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


//your code...

function evenOrOdd(x){
    for (var x = 0; x <= 15; x ++){
        if (x ===0){
            console.log(x + " is even.");
        }
        else if (x % 2 === 0){
            console.log(x + " is even.");
        }
        else{
            console.log(x + " is odd.");
        }
    }
}
console.log(evenOrOdd());




/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...
function multOfThree(x){
    for (var x = 0; x < 100; x ++){
        if (x === 0){
            console.log(x);
        }
        else if (x % 3 === 0 & x % 5 === 0){
            console.log("TEKcamp");
        }
        else if(x % 3 === 0){
            console.log("TEK");
        }
        else if (x % 5 === 0){
            console.log("camp");
        }
        else{
            console.log (x);
        }
    }
}
console.log(multOfThree());

/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...

    for (var i = 0; i <= nums.length; i = i+3){
        console.log(i);
    }


// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
// function getLastElem(){
//     let food = foodArray[i];
//     let school = foodArray[foodArray.length-1];}
//     console.log(school);

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".

//convert array to a string
for (let i = 0; i < foodArray.length; i++){
    let char = foodArray[i].charAt(foodArray[i].length-1);
        if (char === 's'){
            console.log(foodArray[i] + " are " + adjectiveArray[i]);
        }
else {
    console.log(foodArray[i] + " is " + adjectiveArray[i]);
}




//grab last letter of food array and check for plural


/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
// const operations = [];

}
