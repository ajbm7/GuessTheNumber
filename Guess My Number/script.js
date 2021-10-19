'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //When there is no input
  if (!guess) {
    displayMessage('🤨 You didnt type a number!');

    //When Player Wins
  } else if (guess === secretNumber) {
    displayMessage('🤩 Congratulations! You are correct!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '👆 That guess is too high! 👆'
          : '👇 That guess is too low! 👇'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👎 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //To restart the game
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.guess').value = '';
    displayMessage('Start guessing..');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});

//Removed Code for Reference

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🤟 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/

/*
CODING CHALLENGE #1
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
*/

/*
    //When guess is too high
    else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '👆 That guess is too high! 👆';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //When Guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '👇 That guess is too low! 👇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/
