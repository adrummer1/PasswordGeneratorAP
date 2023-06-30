// Assignment Code

var generateBtn = document.querySelector("#generate");

// Set variables for the application.
var verNumber;
var verLowercase;
var verUppercase;
var verCharacter;

var character = ["!", "#", "$", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var all = [];

var choices;

// The generate Password function achieves the user's ability to generate a random password based on the criteria selection. 
function generatePassword() {
  var length = prompt("To generate a password, start by entering a password length value between 8 and 128.");
  if (!length) {
    prompt("Please enter a value to continue with password setup. The password length can be any number between 8 and 128.");
      } else if (length < 8 || length > 128) {
        alert("The password length must be between 8 and 128. Please click the Generate Password button to start over.");
      } else {
        verNumber = confirm("Click 'ok' if you would like to include NUMBERS in your password, othewise click 'cancel' to move to the next criteria.");
        verLowercase = confirm("Click 'ok' if you would like to include LOWERCASE LETTERS in your password, othewise click 'cancel' to move to the next criteria.");
        verUppercase = confirm("Click 'ok' if you would like to include UPPERCASE LETTERS in your password, othewise click 'cancel' to move to the next criteria.");
        verCharacter = confirm("Click 'ok' if you would like to include special CHARACTERS such as '!, #, >, ~' in your password, othewise click 'cancel' to generate your password.")
      }
  
  if (!verNumber && !verLowercase && !verUppercase && !verCharacter) {
    alert("You must include at least one of the criteria (number, lowercase letters, uppercase letters, or characters. Note: For the most secure password we recomment accepting all four. Please click the Generate Password button to start over.")
    } else if (verNumber && verLowercase && verUppercase && verCharacter) {
      choices = all.concat(number, letter, upper, character);
    } else if (verNumber && verLowercase && verUppercase) {
      choices = all.concat(number, letter, upper);
    } else if (verLowercase && verUppercase && verCharacter) {
      choices = all.concat(letter, upper, character);
    } else if (verNumber && verLowercase && verCharacter) {
      choices = all.concat(number, letter, character);
    } else if (verNumber && verUppercase && verCharacter) {
      choices = all.concat(number, upper, character);
    } else if (verNumber && verLowercase) {
      choices = all.concat(number, letter);
    } else if (verNumber && verUppercase) {
      choices = all.concat(number, upper);
    } else if (verNumber && verCharacter) {
      choices = all.concat(number, character);
    } else if (verLowercase && verUppercase) {
      choices = all.concat(letter, upper);
    } else if (verLowercase && verCharacter) {
      choices = all.concat(letter, character);
    } else if (verCharacter && verUppercase) {
      choices = all.concat(character, upper);
    } else if (verNumber) {
      choices = all.concat(number);
    } else if (verLowercase) {
      choices = all.concat(letter);
    } else if (verUppercase) {
      choices = all.concat(upper);
    } else if (verCharacter) {
      choices = all.concat(character);
    };

  // Declaring password within the generatePassword function. 
  var password = [];

  // Below uses the Math method generates the random password and pushes to the text box on the page.
  for (var i = 0; i < length; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  // Remove the separators between password characters.
  var pword = password.join("");
  return pword;
}

// Write password to the #password input. Provided in starter code.
  function writePassword() {
    password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  }  

// Add event listener to generate button Provided in starter code.
generateBtn.addEventListener("click", writePassword);
