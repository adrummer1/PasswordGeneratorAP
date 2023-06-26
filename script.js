
var submit;
var verNumber;
var verLowercase;
var verUppercase;
var verCharacter

character = ["!", "#", "$", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = [];

var toUpper = function (a) {
  return a.toUpperCase();
}

letterUp = letter.map(toUpper);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("To generate a password, start by entering a password length value between 8 and 128.");
  if (!length) {
    prompt("Please enter a value to continue with password setup. The password length can be any number between 8 and 128.");
  } else if (length < 8 || length > 128) {
    prompt("Please enter a value between 8 and 128.");
  } else {
    verNumber = confirm("Click 'ok' if you would like to include numbers in your password, othewise click 'cancel' to move on.");
    verLowercase = confirm("Click 'ok' if you would like to include lowercase letters in your password, othewise click 'cancel' to move on.");
    verUppercase = confirm("Click 'ok' if you would like to include uppercase letters in your password, othewise click 'cancel' to move on.");
    verCharacter = confirm("Click 'ok' if you would like to include special characters such as '!, #, >, ~' in your password, othewise click 'cancel' to move on.")
  }
  if (!verNumber && !verLowercase && !verUppercase && !verCharacter) {
    alert("You must include at least one of the criteria (number, lowercase letters, uppercase letters, or characters. Note: For the most secure password we recomment accepting all four.")
  } else if (verNumber && verLowercase && verUppercase && verCharacter) {
    choices = character.concat(number, letter, upper, character);
  } else if (verNumber && verLowercase && verUppercase) {
    choices = character.concat(number, letter, upper);
  } else if (verLowercase && verUppercase && verCharacter) {
    choices = character.concat(letter, upper, character);
  } else if (verNumber && verLowercase && verCharacter) {
    choices = character.concat(number, letter, character);
  } else if (verNumber && verUppercase && verCharacter) {
    choices = character.concat(number, upper, character);
  } else if (verNumber && verLowercase) {
    choices = character.concat(number, letter);
  } else if (verNumber && verUppercase) {
    choices = character.concat(number, upper);
  } else if (verNumber && verCharacter) {
    choices = character.concat(number, character);
  } else if (verLowercase && verUppercase) {
    choices = character.concat(letter, upper);
  } else if (verLowercase && verCharacter) {
    choices = character.concat(letter, character);
  } else if (verCharacter && verUppercase) {
    choices = character.concat(character, upper);
  } else if (verNumber) {
    choices = character.concat(number);
  } else if (verLowercase) {
    choices = character.concat(letter);
  } else if (verUppercase) {
    choices = character.concat(upper);
  } else if (verCharacter) {
    choices = character.concat(character);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
