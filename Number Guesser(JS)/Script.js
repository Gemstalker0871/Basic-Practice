let randomeNumber = parseInt(Math.random()*100 + 1);


const submit = document.querySelector('#sub');          //put .value to get value
const userInput = document.querySelector('#field');
const guessesSlot = document.querySelector('.guesses');
const guessRemaining = document.querySelector('.leftguess');
const range = document.querySelector('.loworhigh');
const resultContent = document.querySelector('.result');

const p = document.createElement('p');

let prevGuess = []; 
let numGuess = 1;
let playGame = true;


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter Valid Number');
    }
    else if(guess < 1){
        alert('Please Enter Valid Number');
    }
    else if(guess > 100){
    alert('Please Enter Valid Number');
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Number was ${randomeNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}


function checkGuess(guess){
    if(guess === randomeNumber){
        displayMessage("You Guessed it right")
        endGame()
    }
    else if(guess < randomeNumber){
        displayMessage(`Number is higher than ${guess}`)
    }

    else if(guess > randomeNumber){
    displayMessage(`Number is lower than ${guess}`)
    }

}


function displayGuess(guess){
    userInput.value = ''
    if(numGuess === 1){
        guessesSlot.innerHTML += `${guess}`
    }
    else{
        guessesSlot.innerHTML += `, ${guess}`
    }
    guessRemaining.innerHTML = `${10 - numGuess}`
    numGuess++


}


function displayMessage(message){
    range.innerHTML = `<h2>${message}</h2>`

}


function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomeNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 1
        guessesSlot.innerHTML = ''
        guessRemaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        resultContent.removeChild(p)
        displayMessage('')

        playGame = true
    })


}


function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled', '')
    submit.setAttribute('disabled', '')
    p.classList.add(`button`)
    p.innerHTML = `<h2 id = "newGame"> Start New Game </h2>`;
    resultContent.appendChild(p)
    playGame = false
    newGame()

}

