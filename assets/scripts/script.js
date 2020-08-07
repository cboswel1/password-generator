// Assignment Code

// Question! Why did let not work in first else statement? 



// Array of potential random user criteria
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890"
const special = "!@#$%^&*()"



var generateBtn = document.querySelector("#generate");

// empty array for loop at bottom. Moved out of function 
var pass= [];

// Function to generate password
function generatePassword() {

  // stores users choice. 
  var response = ""; 

    //User Prompts Section

    // tell user that they must choose between a range of characters. 8 min, 128 max; 

  const passLength = prompt ("All valid passwords have a minimum of 8 character, and a maximum of 128, please choose now." )

    // if user fails to make choice
  if (!passLength) {
      alert("You need to enter a value");

  } 
  
   //if user chooses number outside of parameters
  else if (passLength < 8 || passLength > 128) {
      alert("You must choose a password between 8 and 128!")

  } 
  
  else {

    // Ask user if they wish to have uppercase letters in their password 

      var upperCon = confirm("Would you like to use uppercase characters in your password?"); 
      console.log(upperCon);
  
    // Ask user if they wish to have lowercase letters in their password 
    
      var lowerCon = confirm("Would you like to use lowercase characters in your password?"); 
      console.log(lowerCon);

    //Ask user if they wish to have numbers in their password 
    
      var numbersCon = confirm("Would you like to use numbers in your password?"); 
      console.log(numbersCon);

    // Ask user if they wish to have special characters in their password 

      var specialCon = confirm("Would you like to use special characters in your password?");
      console.log(specialCon);
  }; 
  
    // Let user know they must select at least one criteria 

  if (!upperCon && !lowerCon && !numbersCon && !specialCon) {
      alert("You must choose at least one criteria. Try again");
      console.log(upperCon);
  } 
  // List of all possible user choices 

  //response variable will hold values of user choice 

  // all choices
  else if (upperCon && lowerCon && numbersCon && specialCon) {
      console.log("4 choices")
      response = upperCase.concat(lowerCase, numbers, special);
      console.log(response);
  }
  // 3 choice
  else if (upperCon && lowerCon && numbersCon) {
      console.log("3 choice 1");
      response = upperCase.concat(lowerCase, numbers);
      console.log(response);
  } 
  // 3 choice
  else if (upperCon && lowerCon && specialCon) {
      console.log("3 choice 2");
      response = upperCase.concat(lowerCase, special);
      console.log(response);
  } 
  // 3 choice
  else if (upperCon && specialCon && numbersCon) {
     console.log("3 choice 3");
     response = upperCase.concat(special, numbers);
     console.log(response);

  } 
  // 3 choice 
  else if (lowerCon && specialCon && numbersCon) {
     console.log("3 choice 4"); 
     response = lowerCase.concat(special, numbers);
     console.log(response);

  }
  // 2 choice 
  else if (upperCon && specialCon) {
     console.log("2 choice 1");
     response = upperCase.concat(special);

  }
  // 2 choice
  else if (upperCon && lowerCon) {
     console.log("2 choice 2");
     response = upperCase.concat(lowerCon);
     console.log(response);
  }
  // 2 choice 
  else if (upperCon && numbersCon) {
     console.log("2 choice 3"); 
     response = upperCase.concat(numbers);
     console.log(response);

  }
  // 2 choice 
  else if (lowerCon && specialCon) {
     console.log("2 choice 4");
     response = lowerCon.concat(special);
     console.log(response);

  }
  // 2 choice 
  else if (lowerCon && numbersCon) {
     console.log("2 choice 5"); 
     response = lowerCon.concat(numbers); 
     console.log(response);

  }
  // 2 choice 
  else if (numbersCon && specialCon) {
     console.log("2 choice 6"); 
     response = numbers.concat(special);
     console.log(response);
  }
  // 1 choice 
  else if (upperCon) {
     console.log("1 choice 1");
     response = upperCase;
     console.log(response);
  }
  // 1 choice 
  else if (lowerCon) {
     console.log("1 choice 2");
     response = lowerCase;
     console.log(response);
  }
  // 1 choice 
  else if (numbersCon) {
     console.log("1 choice 1");
     response = numbersCon;
     console.log(response);
  };

  //loop for random password section 

  // empty array holder for userChoice outcome 
  // var pass= [];

  // loop that can take in user's choice (response), and randomize selection based on length
  for (var i = 0; i < passLength; i++) {
    var userChoice = response[Math.floor(Math.random() * response.length)];
    //.push to take userChoice variable outcome and plug into pass array
    pass.push(userChoice);
    //I kept getting commas in between, I had to look this up.
    console.log(pass.join(''));
  };
  
   // How do I get rid of the commas!!!!

}





    // Write password to the #password input
    function writePassword() {
      console.log('writePassword is running');
      var password = generatePassword();
      var passwordText = document.querySelector("#password");


      passwordText.value = pass.join('');

    }

    

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);