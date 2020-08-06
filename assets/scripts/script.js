// Assignment Code
// Question! Why did let not work here to target 2nd if statement in function? 

// let upperCon; 
// let lowerCon; 
// let numbersCon; 
// let specialCon; 

// Could I turn these into individual arrays?
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const special = "!@#$%^&*()";


// charArray = [upperCase, lowerCase, numbers, special]; 


// var response = []; 

var generateBtn = document.querySelector("#generate");



// Function to generate password
function generatePassword() {



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

  // all choices
  else if (upperCon && lowerCon && numbersCon && specialCon) {
      console.log("4 choices")
  }
  // 3 choice
  else if (upperCon && lowerCon && numbersCon) {
      console.log("3 choice 1");
      //place randoms
  } 
  // 3 choice
  else if (upperCon && lowerCon && specialCon) {
      console.log("3 choice 2");

  } 
  // 3 choice
  else if (upperCon && specialCon && numbersCon) {
     console.log("3 choice 3");

  } 
  // 3 choice 
  else if (lowerCon && specialCon && numbersCon) {
     console.log("3 choice 4"); 

  }
  // 2 choice 
  else if (upperCon && specialCon) {
     console.log("2 choice 1");

  }
  //2 choice
  else if (upperCon && lowerCon) {
     console.log("2 choice 2");

  }
  //2 choice 
  else if (upperCon && numbersCon) {
     console.log("2 choice 3"); 

  }
  //2 choice 
  else if (lowerCon && specialCon) {
     console.log("2 choice 4");

  }
  //2 choice 
  else if (lowerCon && numbersCon) {
     console.log("2 choice 5"); 

  }
  //2 choice 
  else if (numbersCon && specialCon) {
     console.log("2 choice 6"); 

  }
  //1 choice 
  else if (upperCon) {
     console.log("1 choice 1");

  }
  //1 choice 
  else if (lowerCon) {
     console.log("1 choice 2");

  }
  //1 choice 
  else if (numbersCon) {
     console.log("1 choice 1");
     
  }

 
    
    
    // User must select 4 possible criteria (Uppercase, lowercase, numbers, special Characters)

    

    // If user selects particular prompt, we must have an action that randomly selects characters from that specific prompt, in accordance with their character number choice. 

  


    // If user chooses any of the prompts, then initiate their use 



   

    

    // function password(l, Characters) {
    //   var pwd = "" ;
    //   for(let i = 0; i<l; i++) {
    //     pwd += Characters.charAt(Math.floor(Math.random() * Characters.length)); 
    //   }
    //   return pwd; 
    // }

    // console.log(password(passLength, lowerCase));

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