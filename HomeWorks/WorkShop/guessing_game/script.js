// Guesing Game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1))

let attemts = 1;
let guess;
let running = true;


while(running) {

    guess = window.prompt(`Please Guess a Number between ${minNum} - ${maxNum}`)
    guess = Number(guess)

    if (isNaN(guess)) {
        window.alert("Please enter a valid Number");
    }

    else if(guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid Number");
    } else {
        attemts++;
        if (guess < answer){
            window.alert("Too Low! Please Try Again!");
        }
        else if (guess > answer) {
            window.alert("Too High! Please Try Again!");
        }
        else {
            window.alert(`CORRECT! Your Answer is ${answer}. It took You ${attemts} attemts! `);
            running = false
        }
    }
    
}