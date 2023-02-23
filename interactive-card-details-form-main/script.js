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
//  Create a function where you cant put invalid characters 
// Split the card number is groups of 4

function inputCardNum() {
    let cardNumberInput = cardNumber.value;
    let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
      formattedCardNumber = cardNumberSections.join(" ");
    }
      // If the formmattedCardNumber is different to what is shown change the value
    if (cardNumberInput !== formattedCardNumber) {
    cardNumber.value = formattedCardNumber;
    }
    numOnCard.innerHTML = cardNumber.value;
    if (cardNumber.value === "") {
    numOnCard.innerHTML = cardNumber.placeholder;
  }
}

function inputMM() {
    let formattedMM = expiry[0].value;
    formattedMM = formattedMM.substring(0, 2);
    expiry[0].value = formattedMM;
    if (expiry[0].value === "") {
      expMM.innerHTML = "00";
    } else {
      expMM.innerHTML = expiry[0].value;
    }
  }
  function inputMM() {
    // Get the value of the first element of the 'expiry' array and store it in a variable called 'formattedMM'
    let formattedMM = expiry[0].value;
    // Extract the first two characters of 'formattedMM' and store it back into 'formattedMM'
    formattedMM = formattedMM.substring(0, 2);
    // Set the value of the first element of the 'expiry' array to 'formattedMM'
    expiry[0].value = formattedMM;
    // Check if the value of the first element of the 'expiry' array is empty
    if (expiry[0].value === "") {
      // If it is empty, set the innerHTML of the 'expMM' element to "00"
      expMM.innerHTML = "00";
    } else {
      // If it is not empty, set the innerHTML of the 'expMM' element to the value of the first element of the 'expiry' array
      expMM.innerHTML = expiry[0].value;
    }
  }
  
  function inputYY() {
    // Get the value of the second element of the 'expiry' array and store it in a variable called 'formattedYY'
    let formattedYY = expiry[1].value;
    // Extract the first four characters of 'formattedYY' and store it back into 'formattedYY'
    formattedYY = formattedYY.substring(0, 4);
    // Set the value of the second element of the 'expiry' array to 'formattedYY'
    expiry[1].value = formattedYY;
    // Check if the value of the second element of the 'expiry' array is empty
    if (expiry[1].value === "") {
      // If it is empty, set the innerHTML of the 'expYY' element to "0000"
      expYY.innerHTML = "0000";
    } else {
      // If it is not empty, set the innerHTML of the 'expYY' element to the value of the second element of the 'expiry' array
      expYY.innerHTML = expiry[1].value;
    }
  }

  function inputCvc() {
    // Get the value of the cvc input element and store it in a variable called 'formattedCvc'
    let formattedCvc = cvc.value;
    // Extract the first three characters of formattedCvc and store it back into 'formattedCvc'
    formattedCvc = formattedCvc.substring(0, 3);
    // Set the value of the 'cvc' input element to formattedCvc
    cvc.value = formattedCvc;
    // Check if the value of the cvc input element is empty
    if (cvc.value === "") {
      // If it is empty, set the innerHTML of the cvcDisplay element to 000
      cvcDisplay.innerHTML = "000";
    } else {
      // If it is not empty, set the innerHTML of the cvcDisplay element to the value of the 'cvc' input element
      cvcDisplay.innerHTML = cvc.value;
    }
  }
  
  function massValidate() {
    // Define a nested function called validateName
    function validateName() {
      // Define a regular expression pattern for a cardholder name
      let cardholderExp = /^[A-Z a-z]+$/;
      // Get the error message element and store it in a variable called errorMsg
      let errorMsg = document.getElementById("errorMsg");
      // Check if the value of the 'cardholder' input element matches the regular expression pattern
      if (cardholder.value.match(cardholderExp)) {
        // If it matches, clear the content of the error message element
        errorMsg.textContent = "";
      } else {
        // If it does not match, set the content of the error message element to Please enter cardholder name!
        errorMsg.innerHTML = "Please enter cardholder name!";
      }
    }
  }

  function validateCard() {
    // Get the card number error message element and store it in a variable called cardNumError
    let cardNumError = document.getElementById("card-num-error");
    // Check if the length of the value of the cardNumber input element is greater than 0 and less than 16
    if (cardNumber.value.length > 0 && cardNumber.value.length < 16) {
      // If it is, set the innerHTML of the 'cardNumError' element to Wrong format
      cardNumError.innerHTML = "Wrong format!";
    } else if (cardNumber.value == "") {
      // If the value of the cardNumber input element is empty set the innerHTML of the cardNumError element to "Can't be blank!"
      cardNumError.innerHTML = "Can't be blank!";
    } else {
      // If the value of the cardNumber input element is not empty and has a length of 16 or greater clear the innerHTML of the cardNumError element
      cardNumError.innerHTML = "";
    }
  }
  function validateExpiry() {
    // Create a regular expression for the expiry month and store it in a variable called 'expMonth'
    let expMonth = /^(0[0-9]|1[1-2]){2}$/;
    // Create a regular expression for the expiry year and store it in a variable called 'expYear'
    let expYear = /^[0-9][0-2]{4}$/;
    // Check if the value of the first element in the 'expiry' array matches the 'expMonth' regular expression
    if (expiry[0].value.match(expMonth)) {
      // If it does, clear the innerHTML of the 'expiryErrorMsg' element
      expiryErrorMsg.innerHTML = "";
    // Check if the value of both the first and second element in the 'expiry' array match the 'expMonth' and 'expYear' regular expressions respectively
    } else if (
      expiry[0].value.match(expMonth) &&
      expiry[1].value.match(expYear)
    ) {
      // If they do, clear the innerHTML of the 'expiryErrorMsg' element
      expiryErrorMsg.innerHTML = "";
    // Check if the value of the first element in the 'expiry' array is empty
    } else if (expiry[0] == "") {
      // If it is, set the innerHTML of the 'expiryErrorMsg' element to "Can't be blank!"
      expiryErrorMsg.innerHTML = "Can't be blank!";
    // If none of the above conditions are met, set the innerHTML of the 'expiryErrorMsg' element to "Wrong format!"
    } else {
      expiryErrorMsg.innerHTML = "Wrong format!";
    }
  }
//   // google how to throw checkout errors in javascript card info 
  function validateCvc() {
    // Get the error message 
    let cvcErrorMsg = document.getElementById("error-cvc");
    //  expression for 3-digit cvc code
    let cvcExp = /^[0-9]{3}$/;
    // Sees if cvc code is blank
    if (cvc.value === "") {
      // Display error 
      cvcErrorMsg.innerHTML = "Can't be blank";
    } else if (cvc.value.match(cvcExp)) { // Check if cvc code matches the regular expression
      //  Clear error 
      cvcErrorMsg.innerHTML = "";
    } else {
      // Display error 
      cvcErrorMsg.innerHTML = "Wrong format!";
    }
  }
  
// Validate the input fields
validateCard();
validateName();
validateExpiry();
validateCvc();
// See if any required fields is empty or has a wrong format
if (
  nameOnCard.innerHTML == cardholder.placeholder ||
  numOnCard.innerHTML == cardNumber.placeholder ||
  expMM.innerHTML == "00" ||
  expYY.innerHTML == "0000" ||
  cvcDisplay.innerHTML == "000" ||
  (cardNumber.value.length > 0 && cardNumber.value.length < 16)
) {
  // Return false if any of the conditions is met
  return false;
} else {
  // Return true if all the conditions are met
  return true;
}


// create function where if anything is empty the submit doesnt work
