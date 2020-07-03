// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// We need a list of characters
var bucketLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var bucketUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var bucketNumber = "1234567890".split("");
var bucketSymbol = "!@#$%^&*".split("");

// console.log(bucketLowercase, bucketUppercase, bucketNumber, bucketSymbol);

// We need to find out what the user wants
function generatePassword() {
  // How many characters does the user want?
  passwordLength = prompt(
    "Choose a character length between 8-128 for your new password."
  );

  // Password must be between 8-128 characters long
  if (passwordLength < 8 || passwordLength > 128) {
    //Alert User
    alert("Please choose a number between 8 and 128");

    // Return to beginning of function
    return generatePassword();
  }

  // Make a list of characters based on what the user wants - one master array

  //Master Array that will hold all user characters chosen, new password array that will hold all new password characters
  var newpassword = [];
  var bucketMain = [];

  //Setting the base of user choices to false  - "Cancel" on prompt
  var lowercase = false;
  var uppercase = false;
  var number = false;
  var symbol = false;
  //Setting the base of user choice to "true" to zero so we can count up with every "OK" click
  var confirms = 0;

  //Prompts to recieve input from what the user wants
  number = confirm("Do you want numbers in your new password?");

  symbol = confirm("Do you want symbols in your new password?");

  uppercase = confirm("Do you want uppercase letters in your new password?");

  lowercase = confirm("Do you want lowercase letters in you new password?");

  // console.log(number);

  // If they ask for lowercase characters add lowercase

  if (lowercase) {
    bucketMain = bucketMain.concat(bucketLowercase);
    confirms = confirms + 1;
  }
  //if they ask for uppercase characters add uppercase
  if (uppercase) {
    bucketMain = bucketMain.concat(bucketUppercase);
    confirms = confirms + 1;
  }
  //if they ask for number add numbers
  if (number) {
    bucketMain = bucketMain.concat(bucketNumber);
    confirms = confirms + 1;
  }

  //if they ask for symbols add symbols
  if (symbol) {
    bucketMain = bucketMain.concat(bucketSymbol);
    confirms = confirms + 1;
  }

  if (bucketMain.length == 0) {
    alert("Pick a character.");
    return generatePassword();
  }

  // console.log(confirms);

  //Look for the random characters to be pulled for new password

  if (lowercase) {
    newpassword.push(bucketLowercase[randomPull(bucketLowercase)]);
  }

  if (uppercase) {
    newpassword.push(bucketUppercase[randomPull(bucketUppercase)]);
  }

  if (number) {
    newpassword.push(bucketNumber[randomPull(bucketNumber)]);
  }

  if (symbol) {
    newpassword.push(bucketSymbol[randomPull(bucketSymbol)]);
  }

  console.log(newpassword);

  // Pick out the characters needed from the user input randomly
  for (var i = 0; i < passwordLength - confirms; i++) {
    newpassword.unshift(bucketMain[randomPull(bucketMain)]);
  }

  //Put them all in one place -password
  newpassword = newpassword.join("");
  console.log(newpassword);
  return newpassword;
}

function randomPull(string) {
  return Math.floor(Math.random() * string.length);
}
//Write password to the #password input
// Send them back out

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
