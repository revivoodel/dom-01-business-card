// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test
const MAX = 80
const MIN = 10
const Input = {
    name: 0,
    job: 1,
    email: 2
};
const Button = {
    theme: 0,
    reset: 1
};
// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty
const input = document.getElementsByTagName("input");
const button = document.getElementsByTagName("button");
const textarea = document.getElementsByTagName("textarea");
const select = document.getElementsByTagName("select");
const body = document.getElementsByTagName("body");
const form = document.getElementsByTagName("form");





const cardName = document.getElementById("card-name");
const cardJob = document.getElementById("card-job");
const cardEmail = document.getElementById("card-email");
const cardBio = document.getElementById("card-bio");
const avatar = document.getElementById("avatar");
const bioLeft = document.getElementById("bio-left");
const counter = document.getElementsByClassName("counter");

const card = document.getElementById("card");

input[Input.name].addEventListener("input", function (event) {
    console.log(event.target.value);
    cardName.textContent = (event.target.value.trim()) ? event.target.value.trim() : "Your name";
    // Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)
    avatar.textContent = (event.target.value.trim()[0]) ? event.target.value.trim()[0].toUpperCase() : "?";
});

input[Input.job].addEventListener("input", function (event) {
    console.log(event.target.value);
    cardJob.textContent = (event.target.value.trim()) ? event.target.value.trim() : "Your job title";
});


input[Input.email].addEventListener("input", function (event) {
    console.log(event.target.value);
    cardEmail.textContent = (event.target.value.trim()) ? event.target.value.trim() : "your@email.com";
});


textarea[0].addEventListener("input", function (event) {
    console.log(event.target.value);
    cardBio.textContent = (event.target.value.trim()) ? event.target.value.trim() : "Your bio will appear here.";
    // Step 3: bio character counter + "warning" class when 10 or fewer are left
    bioLeft.textContent = MAX - (event.target.value.length);
    ((MAX - (event.target.value.length)) <= MIN) ? counter[0].classList.add("warning") : counter[0].classList.remove("warning");
});


// Step 4: accent color (card border + avatar background)
select[0].onchange = function (event) {
    console.log(event.target.value);
    card.style.borderColor = event.target.value;
    avatar.style.backgroundColor = event.target.value;
};
// Step 5: dark mode button
let countDarkMode = 0;
button[Button.theme].addEventListener("click", function (event) {
    console.log(event.target.value);
    if (!countDarkMode % 2) {
        body[0].classList.add("dark");
        button[Button.theme].textContent="Light mode"

    }
    else {
        body[0].classList.remove("dark");
        button[Button.theme].textContent="Dark mode"

    }
    countDarkMode++ ;
});



// Step 6: reset button
button[Button.reset].addEventListener("click", function (event) {
    console.log(event.target.value);
    body[0].classList.remove("dark");
    card.style.borderColor = "#4f46e5";
    avatar.style.backgroundColor = "#4f46e5";
    form[0].reset()
    avatar.textContent = "?"
    cardName.textContent = "Your name"
    cardJob.textContent = "Your job title"
    cardEmail.textContent = "your@email.com"
    cardBio.textContent = "Your bio will appear here."
    bioLeft.textContent = MAX;
    counter[0].classList.remove("warning")


});

//
