var generateBtn = document.querySelector("#generate");
var character = "!@#$%^&*<>+".split("");
var number = "1234567890".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

function generatePassword(){

  var spaceHolder = [];
  var generatedPassword = [];

  // prompt length of at least 8 characters and no more than 128 characters
  var passwordLength = prompt("Please select password length minimum 8 characters and maximum 128 characters ");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("ERROR: Choose a number between 8 - 128");
    return "";
  }

  // series of prompts for password criteria
  // confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var characterConfrim = confirm("Use special characters?");
  var numberConfirm = confirm("Use numbers?");
  var lowerCaseConfirm = confirm("Use lower case letters?");
  var upperCaseConfirm = confirm("Use upper case letters?");

  //input should be validated and at least one character type should be selected
  if (!characterConfrim && !numberConfirm && !lowerCaseConfirm && !upperCaseConfirm){
    alert("Choose at least 1 character type. Try again!");
    return "";
  }

  if (characterConfrim){
    spaceHolder = spaceHolder.concat(character);
  }
  
  if (numberConfirm){
    spaceHolder = spaceHolder.concat(number);
  }

  if (lowerCaseConfirm){
    spaceHolder = spaceHolder.concat(lowerCase);
  }

  if (upperCaseConfirm){
    spaceHolder = spaceHolder.concat(upperCase);
  }

  for (var i = 0; i < passwordLength; i++){
    generatedPassword.push(spaceHolder[Math.floor(Math.random() * spaceHolder.length)]);
  }

  return generatedPassword.join("");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  // GIVEN I need a new, secure password
  
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt

  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered

  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated

  // THEN the password is either displayed in an alert or written to the page
