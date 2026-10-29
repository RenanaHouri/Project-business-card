// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty

// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)

// Step 3: bio character counter + "warning" class when 10 or fewer are left

// Step 4: accent color (card border + avatar background)

// Step 5: dark mode button

// Step 6: reset button

//

let full_name=document.getElementById("name-input");
let job=document.getElementById("job-input");
let email=document.getElementById("email-input");
let bio=document.getElementById("bio-input");
let color=document.getElementById("color-select");
let themeBtn=document.getElementById("theme-btn");
let resetBtn=document.getElementById("reset-btn");


let avatar = document.getElementById("avatar");
let cardName = document.getElementById("card-name");
let cardJob = document.getElementById("card-job");
let cardEmail = document.getElementById("card-email");
let cardBio = document.getElementById("card-bio");
let bioLeft = document.getElementById("bio-left");
let card = document.getElementById("card");
let form=document.getElementById("card-form");


let defaultName = cardName.textContent;
let defaultJob = cardJob.textContent;
let defaultEmail = cardEmail.textContent;
let defaultBio = cardBio.textContent;

let counter=document.querySelector(".counter")
let panelPreview=document.querySelector(".panel preview")
let panel=document.querySelector(".panel")


full_name.addEventListener("input",function()

{

    if(full_name.value.trim()!="")
    {
        cardName.textContent=full_name.value.trim();
        avatar.textContent=full_name.value.trim().split("")[0].toUpperCase()
    }
    else
    {
        cardName.textContent=defaultName;
         avatar.textContent="?"
    }
});

job.addEventListener("input", function() {
    if (job.value.trim() !== "") {
        cardJob.textContent = job.value.trim();
    } else {
        cardJob.textContent = defaultJob;
    }
});

email.addEventListener("input", function() {
    if (email.value.trim() !== "") {
        cardEmail.textContent = email.value.trim();
    } else {
        cardEmail.textContent = defaultEmail;
    }
});

bio.addEventListener("input", function() {
    if (bio.value.trim() !== "") {
        cardBio.textContent = bio.value.trim();
    } else {
        cardBio.textContent = defaultBio;
    }
    
    let leftChar=80-bio.value.length
    bioLeft.textContent=leftChar
    if(leftChar<=10)
    {
        counter.classList.add("warning");
    }
    else{
        counter.classList.remove("warning");
    }

});

color.addEventListener("change",function(){
    card.style.borderColor=color.value;
    avatar.style.backgroundColor=color.value;


});

themeBtn.addEventListener("click",function()
{
    if(themeBtn.textContent=="Dark mode")
    {
        themeBtn.textContent="Light mode";
        document.body.classList.add("dark");


    }
    else
    {
        themeBtn.textContent="Dark mode"
        document.body.classList.remove("dark");
    }

});

resetBtn.addEventListener("click",function()
{
    cardName.textContent=defaultName;
    cardBio.textContent=defaultBio;
    cardEmail.textContent=defaultEmail;
    cardJob.textContent=defaultJob;
    form.reset();
    avatar.textContent="?";
    bioLeft.textContent=80;
    document.body.classList.remove("dark");
    counter.classList.remove("warning");
    card.style.borderColor="#4f46e5";
     avatar.style.backgroundColor="#4f46e5";


});




