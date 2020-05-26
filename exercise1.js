//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...

function cToF(celcius){
    var cTemp = celcius;
    var cToFahr = cTemp * 9/5 + 32;
    var message = cTemp + '\xB0C is' + CToFahr + '\cB0f.'
    console.log(message);
}

function fToC(fahrenheit){
    var fTemp = fahrenheit;
    var FToCel = (fTemp - 32) * 5/9;
    var message = fTemp + '\xB0F is' + fToCel + '\xB0C.';
    console.log(message);
}






/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...

function voteable(age){
    var age = age;
    var ans = 'No';
    if (age >= 18){
        ans = 'Yes';
    }
    return (ans);
}
console.log(ans);





//************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...

string_to_array = function (str){
    return str.trim().split(" ");
}
console.log(string_to_array("The five boxing wizards jump quickly"));

var myArray = [string_to_array];
var myString = myArray.join(" ");







/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...

function reverse_telephone(n){
   let num = n;
   n.toString();
   n.split('');
   n.reverse();
   n.join('');
   parseFloat(n);
   n * Math.sign(n);





/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...


function car(make, model, year, color){
this.make = make;
this.model = model;
this.year = year;
this.color = color;
var myCar = new car ('Hyundai', 'Tuscon', '2017', 'White');
}
return myCar;



//************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


//your code...

function evenOrOdd(x){
    for (var x = 0; x < 15; x ++){
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




/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...
function multOfThree(x){
    for (var x = 0; x < 100; x ++){
        if (x === 0){
            console.log(x)
        }
        else if (x % 3 === 0 & x % 5 === 0){
            console.log(TEKcamp)
        }
        else if(x % 3 === 0){
            console.log(TEK);
        }
        else if (x % 5 === 0){
            console.log(camp);
        }
        else{
            console.log (x)
        }
    }
}

/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...

function everyThird(lowerBound, upperBound){
    var x = (lowerBound + 1) % 2;

    var list = [];
    var k = 0;

    for (var i = lowerBound + x; i <= upperBound; i = i+6){
        list[k] = i;
        k++;
    }
    return list;


// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
function getLastElem(){
    let school = foodArray[foodArray.length-1];
    console.log(school);

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".

//convert array to a string
for (let i = 0; i < foodArray.length; i++){
    if ((typeof foodArray[i] === 'string')){
        if (food.slice(food.legth-1)=== 's')
        let adjective = adjectiveArray[i].toString();
console.log(food + ' are' + adjectiveArray[i]);
    }
else{
    console.log(foodArray[i].school + " is" + adjectiveArray[i]);
}
}

//grab last letter of food array and check for plural


/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
const operations = [];
function doMath() {};


