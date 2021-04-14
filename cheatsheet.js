// Unit 3
// Material Introduced in Spam Pop Up and Madlib Projects
// Storing variables
// Input and Output through Pop Ups

// To store something in the computer memory
// Use this whenever you create a new variable:
let variable_name = thing_to_be_stored;

// Changing a variable
variable_name = new_value;

// Output from Pop Up:
alert("Whatever you want to say goes here!");

// Get Input from a Pop Up:
prompt("Your question goes here?")

// To ask a question and store the answer in memory
let name = prompt("What is your name?");

//
// Material Introduced in Soundboard Project
//

// For selecting an element:
// Replace the phrase "CSS Selector" with a CSS selector for the object you are selecting. Leave the quotes.
let variable_name = document.querySelector("CSS Selector");

// For creating an event listener
// Make sure to copy all 4 lines, from element to });!
// Replace element with the element that is being assigned the event listener. Replace "event type" with the type of "event", for example "click". Add your procedure in the space.
element.addEventListener("event_type", function() {
	// Your procedure goes here.

});

// For playing an audio element;
// Replace sound with the variable for your sound element.
sound.currentTime = 0;
sound.play();

//
// Material Introduced in Robot Interview Project
//

// Getting and storing a value from the user using an <input> field:
let input_field = document.querySelector("CSS Selector");
let input_value = input_field.value;

// Outputting information into the HTML of the webpage:
let output_field = document.querySelector("CSS Selector");
output_field.innerHTML = "The text you want to appear on the page."

//
// Material Introduced during Change Background Project
//

// Create a random number function.
function generate_random(min_number, max_number) {
	// Generates a random number from min_number to max_number.
	let range = max_number - min_number;
	return min_number + Math.round(Math.random()*range);
}

// Use a random number function.
generate_random(min_number, max_number);

// How to change an elements CSS styling
// Replace the words element, property, and value as needed
element.style.property = value;

//
// Material Introduced during the Calculator Project
//

// To turn something into a number datatype:
let number_version = Number(string_version);

// To turn something into a string datatype:
let string_version = String(number_version);

// 
// Condiontional Statements Material
//

if (conditon) {
	// Code block if the condition is true
}
else {
	// Code block if the condition is false
}

// UNIT 5 - LOOPS

// For Each loops:
LISTNAME.forEach((INDIVIDUALITEMNAME) => {
	// Code that runs for each item goes here.
})

// Set Interval Loops
setInterval(function() {
	// Function that repeats goes here!
}, TIME)

// While Loops
while (CONDTION) {
	// Code block that runs while the condition is TRUE
}

// Unit 6
// List Tools

// To add something
function append(list, value) {
	list = list.push(value);
}

// To insert something
function insert(list, i, value) {
	list = list.splice(i, 0, value);
}

// To remove something
function remove(list, i) {
	list = list.splice(i, 1);
}
// End of List Tools

// Creating our own functions:
// Defining a function.
function nameOfYourFunction(input1,input2,...) {
	// Procedure for function.
}

// Useful function we built as a class to display text on the screen:
function display(text) {
	// This code will display text on the screen!
	// Select the body, <body> of the website
	let body = document.querySelector("body");
	// Create a new paragraph, <p>
	let newParagraph = document.createElement("p");
	// Change the text of the paragraph to the desired text
	newParagraph.innerHTML = text;
	// Add the paragraph to the <body> of the website
	body.appendChild(newParagraph);
}
