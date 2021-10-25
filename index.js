/*
1. CONVERTING TEMPERATURES
 * Programming Quiz: Converting Temperatures
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the formula above
 * 2. Log the fahrenheit variable to the console
 *
 */

let celsius = 12;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

/*
2. FAVORITE FOOD
 * Programming Quiz: Favorite Food
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should print a string with your favorite food
 * 2. Your code should have the first character capitalized
 * 3. Your code must have a `console.log()` function
 * 4. Your code should not be empty
 */

let favoriteFood = "Beans";

console.log(favoriteFood);

/*
3. STRING EQUALITY FOR ALL
 * Programming Quiz: String Equality for All
 *
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `answer`
 * 2. Your code should have "ALL Strings are CrEaTeD equal" on the left side
 * 3. Your code should use `==` comparison operator
 * 4. The comparison should evaluate to true
 * 5. The right side of your expression should match the left side
 */

const answer =
    "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";

console.log(answer);

/*
4. ALL TIED UP
 * Programming Quiz: All Tied Up
 
 * Quiz Requirements
 * 1. Your code should have a variable joke
 * 2. Your joke should use only one string
 * 3. Your joke should match the expected format
*/

let joke = 'Why couldn\'t the shoes go out and play?\nThey were all "tied" up!';

console.log(joke);

/*
5. YOSA BOSUN
 * Programming Quiz: All Tied Up
 
 * Quiz Requirements
 * 1. Your code should have a variable joke
 * 2. Your joke should use only one string
 * 3. Your joke should match the expected format
*/

let poemOne = "Blowing from the west";
let poemTwo = "Fallen leaves gather";
let poemThree = "In the east.";
let haiku = poemOne + "\n" + poemTwo + "\n" + poemThree;

console.log(haiku);

/*
6.WHAT'S MY NAME?
 * Programming Quiz: What's my Name?
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `fullName`
 * 2. Your variable `fullName` should be declared using the `var` keyword
 * 3. Your variable `fullName` should be a non-empty string
 */

var fullName = "Lanre Fagbeyiro";

console.log(fullName);

/*
7. OUT TO DINNER
 * Programming Quiz: Out to Dinner
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `bill`, `tip`, and `total`
 * 2. Your variables - `bill`, `tip`, and `total` should be declared using the `var` keyword
 * 3. Your variable `bill` should be a number, having a value equal to the result of `10.25 + 3.99 + 7.15`
 * 4. Your variable `tip` should be a number, having a value equal to 15% of the `bill`
 * 5. Your variable `total` should be a number, having a value equal to the `bill` and `tip` added together
 * 6. Your code should print the total to the console
 */

var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
let total = bill + tip;

console.log("$" + total.toFixed(2));

/*
8. MAD LIBS
 * Programming Quiz: MadLibs
 * 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`.
 *
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 *
 * 3. Your madLib should match the given string
 * 4. The madLib variable should be printed to the console
 */

let adjective1 = "amazing";
let adjective2 = "fun";
let adjective3 = "entertaining";
let madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`;

console.log(madLib);

/*
9. ONE AWESOME MESSAGE (2-12)
 * Programming Quiz: One Awesome Message (2-12)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 *
 * 2. Create `awesomeMessage` variable, and set it to a message using string concatenation and the variables above. The `awesomeMessage` variable should use `firstName`, `interest`, and `hobby`
 *
 * 3. The `awesomeMessage` variable should have the correct format, as shown below:
 * "Hi, my name is _____. I love ______. In my spare time, I like to ______."
 *
 * 4. Print `awesomeMessage` variable to the console using log() method
 */

let firstName = "Lanre";
let interest = "horror movies";
let hobby = "play volleyball";
let awesomeMessage = `Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to ${hobby}.`;

console.log(awesomeMessage);