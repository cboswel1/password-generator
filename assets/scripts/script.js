// Assignment Code


var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {


    //User Prompts Section

    // tell user that they must choose between a range of characters. 8 min, 128 max; 

    const passLength = prompt ("All valid passwords have a minimum of 8 character, and a maximum of 128, please choose now." )

    // if user fails to make choice
    if (!passLength !== false) {
      alert("You need a value");

    //if user chooses number outside of parameters
    } else if (passLength < 8 || passLength > 128) {
      alert("You must choose a password between 8 and 128!")
    } else {

      // user choices 

    // Ask user if they wish to have uppercase letters in their password 

    const upperCon = confirm ("Would you like to use uppercase characters in your password?"); 

    // Ask user if they wish to have lowercase letters in their password 

    const lowerCon = confirm ("Would you like to use lowercase characters in your password?"); 

    //Ask user if they wish to have numbers in their password 

    const numbersCon = confirm ("Would you like to use numbers in your password?"); 

    // Ask user if they wish to have special characters in their password 

    const specialCon = confirm ("Would you like to use special characters in your password?");
    }


    // User must select 4 possible criteria (Uppercase, lowercase, numbers, special Characters)

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890"; 
    const special = "!@#$%^&*()"

    // If user selects particular prompt, we must have an action that randomly selects characters from that specific prompt, in accordance with their character number choice. 

    const randomPassArray = Array


    // If user chooses any of the prompts, then initiate their use 






    function password(l, upperCharacters) {
      var pwd = "" ;
      for(let i = 0; i<l; i++) {
        pwd += upperCharacters.charAt(Math.floor(Math.random() * upperCharacters.length)); 
      }
      return pwd; 
    }

    console.log(password(passLength, lowerCase));

    //if true, create random choice from upperCase variable
    upperCon = upperCase;

    if (upperCon === true) {
      
    }

    //if true, create random choice from lowerCase variable 
    if (lowerCon === true) {

    }

    //if true, create random choice from numbersCon
    if (numbersCon === true) {

    }

    //if true, create random choice from specialCon 
    if (specialCon === true) {

    }

  }          



          


        

          
        

          
          








    // Write password to the #password input
    function writePassword() {
      console.log('writePassword is running');
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      console.log(passwordText);

      passwordText.value = password;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
