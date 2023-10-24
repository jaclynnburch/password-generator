// Assignment code here
var generateBtn = document.querySelector('#generate');

// Define character types
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var specialCharacters = '!@#$%^&*()_-+=<>?';

// Generate password
function generatePassword() {
  let password = '';
  let characters = '';

  // Prompts for password criteria
  var length = prompt('Enter the desired password length (8 to 128 characters):');
  if (length < 8 || length > 128) {
    return 'Invalid password length.';
  }

  if (confirm('Include lowercase characters?')) {
    characters += lowercase;
  }
  if (confirm('Include uppercase characters?')) {
    characters += uppercase;
  }
  if (confirm('Include numeric characters?')) {
    characters += number;
  }
  if (confirm('Include special characters?')) {
    characters += specialCharacters;
  }

  // Validate that at least one character type is selected
  if (characters === '') {
    alert('You must select at least one character type.');
    return '';
  }

  // Generate the password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add an event listener to the generate button
generateBtn.addEventListener("click", writePassword);