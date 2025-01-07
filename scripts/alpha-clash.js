// function play(){

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const showPlayGround = document.getElementById('play-ground');
//     showPlayGround.classList.remove('hidden');
// }

function handleKeyboardPress(event) {
    const playerPressed = event.key;

    //get the expected alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(expectedAlphabet, playerPressed);

    // compare the player pressed key with the expected alphabet
    if (playerPressed === expectedAlphabet) {
        console.log('Correct');

        //update score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScore = parseInt(currentScoreElement.innerText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);


        //start new round
        continueGame();
        removeBgColorById(expectedAlphabet);
    }
    else {
        console.log('Wrong');
        const currentLifeElement = getTextElementValueById('current-life');
        const newLife = currentLifeElement - 1;
        setTextElementValueById('current-life', newLife);

        if (newLife === 0) {
            gameOver();

        }



        //end the game
        // const currentLifeElement = document.getElementById('current-life');c
        // const currentLife = parseInt(currentLifeElement.innerText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;

    }
}

//capture keyboard key press
document.addEventListener('keyup', handleKeyboardPress)

function continueGame() {
    //generate a random alphabet
    const alphabet = generateRandomAlphabet();
    console.log(alphabet);

    //set randomly alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBgColorById(alphabet);
}

function play() {
    //hide home screen and show play ground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //reset score and life
    setTextElementValueById('current-life', 3);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
}