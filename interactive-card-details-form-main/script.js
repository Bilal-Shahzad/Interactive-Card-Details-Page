const cardholder = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("card-number");
const expiry = Array.from(document.querySelectorAll(".expiry"));
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const nameOnCard = document.querySelector(".cardholder-display");
const numOnCard = document.querySelector(".card-number-display");
const expMM = document.querySelector(".expiry-month-display");
const expYY = document.querySelector(".expiry-year-display");
const cvcDisplay = document.querySelector(".cvc-display");
const thankYou = document.getElementById("thank-you-header");
const thankYouSection = document.getElementById("thank-you");
const continueBtn = document.getElementById("continue");
const form = document.getElementById("myForm");
const expiryErrorMsg = document.getElementById("expiry-error");

// Set the innerHTML of the 'nameOnCard' element to the value of the 'cardholder' input field
// Set the innerHTML of the 'thankYou' element to a string that includes the value of the 'cardholder' input field
// Check if the 'nameOnCard' element is empty
// If the 'nameOnCard' element is empty, set its innerHTML to the placeholder value of the 'cardholder' input field
  
function inputName() {
    nameOnCard.innerHTML = cardholder.value;
    thankYou.innerHTML = `Thank You ${cardholder.value}`;
    if (nameOnCard.innerHTML == "") {
      nameOnCard.innerHTML = cardholder.placeholder;
    }
  }