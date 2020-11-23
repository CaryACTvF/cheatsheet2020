// Unit 3 - Lesson 1
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
