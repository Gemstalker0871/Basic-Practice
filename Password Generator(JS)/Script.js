const passwordBox = document.getElementById("password")
const button = document.getElementById("submit")
const copy = document.getElementById("copy")
const lengthDisplay = document.getElementById("length-display");
const slider = document.getElementById("password-length");
let length = parseInt(slider.value);

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";
const allCharacters = upperCaseLetters + lowerCaseLetters + numbers + symbols;


slider.addEventListener('input', function () {
    length = parseInt(this.value);
    lengthDisplay.textContent = length;
});

button.addEventListener('click', function(e){
    const a = createPassword(length)
    passwordBox.value = a;
})

copy.addEventListener('click', function(){
    navigator.clipboard.writeText(passwordBox.value)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch(err => {
        alert("Failed to copy password: " + err);
      });
});

function createPassword(length) {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";

    const allCharacters = upperCaseLetters + lowerCaseLetters + numbers + symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randIndex];
    }

    return password;
}

