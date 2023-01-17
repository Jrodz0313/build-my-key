Assignment code here
var hello = window.prompt("Please choose a character length between 8 and 128");
console.log(hello);

// function createPass(length) {
//   var password = "";
//   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
//   var charactersLength = characters.length;
//   for (var i = 0; i < length; i++) {
//     result =+ characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return password;
// }
// console.log(createPass(5));

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
