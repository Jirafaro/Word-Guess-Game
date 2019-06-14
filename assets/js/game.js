// Create an array of words
const word = ['injury','pip','underinsured','uninsured','collision','umbrella'];
// Choose words randomly 
// let randNum = Math.floor(Math.random() * word.length);
// let choosenWord = word[randNum];
let rightWord = [];
let wrongWord = ' ';
let underScore = [];
let score = 0;
let choosenWord;
let guesses = 6;

function randomword() {
    let randNum = Math.floor(Math.random() * word.length);
    choosenWord = word[randNum];
}
randomword();
console.log(choosenWord);

// Dom Manipulation
let docUnderScore = document.getElementsByClassName('underscores');
let docwrongguess = document.getElementsByClassName('wrongguess');
let docscore = document.getElementsByClassName('score');
let docGuesses = document.getElementsByClassName('Guesses-Left');
// docUnderScore[0].innerHTML = 'Hello';
console.log(docUnderScore);

// Create underScores based on length of word
let generateunderScore = () => {
    for(let i=0; i < choosenWord.length; i++) {
        underScore.push('_');
        docUnderScore[0].innerHTML = underScore.join(' ');
    }
    return underScore;
}
// testing
console.log(generateunderScore());
// Get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    let count = 0;
// if users guess is right 
for(let i=0; i < choosenWord.length; i++) {
    if(choosenWord[i] === keyword) {
        // add to right words array
        rightWord.push(keyword);
        //replace underscore with right letter
        underScore[i] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        count = count + 1;
    }
}

if(count === 0){
    for (let i = 0; i < wrongWord.length; i++) {
        if(wrongWord[i] === keyword){
            return;
        }
        
    }
    wrongWord = wrongWord + keyword + " ";
    docwrongguess[0].innerHTML = "wrong guess: <br><br><hr>" + wrongWord;
    guesses = guesses - 1;
    if (guesses > 0){
        docGuesses[0].innerHTML = "Guesses-Left:" + guesses; 
    } else {
        alert('You Lose!')
        document.location.reload(true);
    }

    
}
        // check to see if user word matches guesses 
        if(underScore.join('') === choosenWord) {
            alert('You Win!');
            score = score + 1; 
            docscore[0].innerHTML = "Score: " + score;
            randomword(); 
            docUnderScore[0].innerHTML = underScore.join(' ');
            document.location.reload(true);
         } })
