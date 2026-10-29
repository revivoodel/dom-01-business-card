// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty
const input = document.getElementsByTagName("input");
const textarea = document.getElementsByTagName("textarea");

const cardName= document.getElementById("card-name");
const cardJob =document.getElementById("card-job");
const cardEmail =document.getElementById("card-email");
const cardBio =document.getElementById("card-bio");
const avatar =document.getElementById("avatar");
const bioLeft =document.getElementById("bio-left");
const counter =document.getElementsByClassName("counter");



input[0].addEventListener("keyup", function(event) {
    console.log(event.target.value);
    cardName.textContent=(event.target.value)?event.target.value:"Your name";
    // Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)
    avatar.textContent= (event.target.value[0])?event.target.value[0] :"?";
});

input[1].addEventListener("keyup", function(event) {
    console.log(event.target.value);
    cardJob.textContent=(event.target.value)?event.target.value:"Your job title";
});


input[2].addEventListener("keyup", function(event) {
    console.log(event.target.value);
    cardEmail.innerText=(event.target.value)?event.target.value:"your@email.com";
});


textarea[0].addEventListener("keyup", function(event) {
    console.log(event.target.value);
    cardBio.textContent=(event.target.value)?event.target.value:"Your bio will appear here.";
    // Step 3: bio character counter + "warning" class when 10 or fewer are left
    bioLeft.textContent=80-(event.target.value.length);
   ( (80-(event.target.value.length)) <=10)?counter[0].style.color="red":counter[0].style.color="gray";
});


// Step 4: accent color (card border + avatar background)

// Step 5: dark mode button

// Step 6: reset button

//
