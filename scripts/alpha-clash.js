// function play(){

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const showPlayGround = document.getElementById('play-ground');
//     showPlayGround.classList.remove('hidden');
// }

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