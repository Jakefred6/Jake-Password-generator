// use this to generate random password
function generatePassword() {
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()-_+=<>?";
  
    var passwordChars = "";
  
    // password length
    var passwordLength = parseInt(prompt("Please Enter Your password length (between 8 and 128 characters):"));
  
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return generatePassword(); 
    }
  
    // character types
    var includeLowercase = confirm("Do you want to include lowercase characters?");
    var includeUppercase = confirm("Do you want to include uppercase characters?");
    var includeNumeric = confirm("Do you want to include numeric characters?");
    var includeSpecial = confirm("Do you want to include special characters?");
  
    //  at least one character type
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("At least one character type must be selected.");
      return generatePassword();
    }
  
    // This will build the character set based on selected criteria
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
  
    // This will generate the password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * passwordChars.length);
      password += passwordChars.charAt(randomIndex);
    }
  
    return password;
  }
  
//   I am not sure how to add a "yes" or "no" button. As of now it is just "ok" and "cancel"

  var generateBtn = document.querySelector("#generate");
  
  // This is used to write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  

  generateBtn.addEventListener("click", writePassword);


  