// Assignment Code
var generateBtn = document.querySelector("#generate");


// generatePassword() function needs to be defined

function generatePassword() {
  //THEN I am presented with a series of prompts for password criteria
  alert("The following are questions to set up your new password");
  // can do this through series of alerts to the user
  //WHEN prompted for password criteria
  // Criteria:
  // length - at least 8 characters and no more than 128 characters
  var lengthPass = null
  while ((typeof(lengthPass) != "number") && ((lengthPass < 8) || (lengthPass > 128))){
    lengthPass = prompt("Enter the length for the password. It has to be between 8 - 128 characters.")
  }
  lengthPass = parseInt(lengthPass) //turning back into integer
  // character types to include in the password -- lowercase, uppercase, numeric, and/or special characters
  var criteria = {
    "lowercase":false,
    "uppercase":false,
    "numeric":false,
    "special characters":false
  }
  // input should be validated and at least one character type should be selected
  while (criteria.lowercase === false && criteria.uppercase === false && criteria.numeric === false && criteria["special characters"] === false){
    alert("Please select one of the following options")
    criteria.lowercase = confirm("Do you want to include lowercase characters");
    criteria.uppercase = confirm("Do you want to include uppercase characters");
    criteria.numeric = confirm("Do you want to include numeric characters");
    criteria["special characters"] = confirm("Do you want to include special characters characters");
    
  }

  // * WHEN all prompts are answered THEN a password is generated that matches the selected criteria
  // need arrays for each type of characters
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars =  "!#$%&()*+,-./:;<=>?@[]^_`{|}~"+"'"+'"'+"/";
  var charOptions = ""

  if (criteria.lowercase) {
    charOptions += lowerCaseChars
  }
  if (criteria.uppercase) {
    charOptions += upperCaseChars
  }
  if (criteria.numeric) {
    charOptions += numericChars
  }
  if (criteria["special characters"]) {
    charOptions += specialChars
  }

  var passwordGenerated = "" //initialize variable
  // i will run for length specified --- password Generated will be created randomly with the strin of options
  for (var i = 0; i < lengthPass; i++){
    passwordGenerated += charOptions[Math.floor(Math.random()*charOptions.length)]
  }
  // * WHEN the password is generated THEN the password is either displayed in an alert or written to the page
  alert("Your password is: "+passwordGenerated)
  return passwordGenerated

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

