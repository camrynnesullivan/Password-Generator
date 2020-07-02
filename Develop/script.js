// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//  Make Function Generate Password

// We need a list of characters

function generatePassword() {
  var bucketLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  var bucketUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var bucketNumber = "1234567890".split("");
  var bucketSpecialCharacters = "!@#$%^&*".split("");

  // We need to find out what the user wants

  // Upper case letters, lower case, numbers, special characters

  var passwordLength = prompt("Pick a password length  8 and 128.");
  var passwordLowercase = confirm("Would you like lowercase letters?");
  var passwordUppercase = confirm("Would you like uppercase letters?");
  var passwordNumbers = confirm("Would you like numbers?");
  var passwordSpecialCharacters = confirm("Would you like special characters?");

  //Make a list of characters based on what the user wants one master array

  // If they ask for lowercase characters add lowercase

  //if they ask for uppercase characters add uppercase

  //if they ask for number add numbers

  //if they ask for special characters add special characters

  //depending on user input add length of characters

  // Pick out the characters needed from the user input randomly

  for (var i = 0; i < passwordLength; i++) {
    if (passwordLowercase) {
      passwordComplete +=
        bucketLowercase[Math.floor(Math.random() * bucketLowercase.length)];
    }

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Error: Please choose a number between 8 and 128");
      return "";
    } else if (passwordLength >= 8 || passwordLength <= 128) {
    }
    // console.log(
    //   passwordLength,
    //   passwordLowercase,
    //   passwordUppercase,
    //   passwordNumbers,
    //   passwordSpecialCharacters
    // );
  }

  var passwordComplete = "";
}

// Pompt Alert for number characters

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Pick out random items from list of characters

//Put them all in one place -password

// Send them back out

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
