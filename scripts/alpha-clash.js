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
        continueGame();
    }
    else {
        console.log('Wrong');
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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}