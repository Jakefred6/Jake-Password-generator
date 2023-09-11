// Function to generate a random password
function generatePassword() {
    // Define character sets
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()-_+=<>?";
  
    // Initialize an empty character set for the password
    var passwordChars = "";
  
    // Prompt for password length
    var passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));
  
    // Validate password length
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return generatePassword(); // Restart the process
    }
  
    // Custom confirmation prompts for character types
    var includeLowercase = confirm("Include lowercase characters? (Yes/No)");
    var includeUppercase = confirm("Include uppercase characters? (Yes/No)");
    var includeNumeric = confirm("Include numeric characters? (Yes/No)");
    var includeSpecial = confirm("Include special characters? (Yes/No)");
  
    // Validate at least one character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("At least one character type must be selected.");
      return generatePassword(); // Restart the process
    }
  
    // Build the character set based on selected criteria
    if (includeLowercase) {
      passwordChars += lowercaseChars;
    }
    if (includeUppercase) {
      passwordChars += uppercaseChars;
    }
    if (includeNumeric) {
      passwordChars += numericChars;
    }
    if (includeSpecial) {
      passwordChars += specialChars;
    }
  
    // Generate the password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * passwordChars.length);
      password += passwordChars.charAt(randomIndex);
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
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);