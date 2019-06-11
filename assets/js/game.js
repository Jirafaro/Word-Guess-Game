// Create an array of words
const word = ['injury','pip','underinsured','uninsured','collision','umbrella','one step at a time'];
// Choose words randomly 
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

// Dom Manipulation
let docUnderScore = document.getElementsByClassName('underscores')
let docrightWord = document.getElementsByClassName('rightguess')
// docUnderScore[0].innerHTML = 'Hello';
console.log(docUnderScore);

// Create underScores based on length of word
let generateunderScore = () => {
    for(let i=0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
// testing
console.log(generateunderScore());
// Get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
// if users guess is right 
    if(choosenWord.indexOf(keyword) > -1) {
    // add to right words array
    rightWord.push(keyword);
    //replace underscore with right letter
    underScore[choosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.toString(' ');
    // check to see if user word matches guesses 
    if(underScore.join('') == choosenWord) {
        alert('You Win!')
    }
        } else 
         wrongWord.push(keyword);
    } )  
// Generate underscores 
// Check if guess is right
// if right push to right array 
// if wrong push to wrong array
