'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 correct number!';
// document.querySelector('.number').textContent = 3;
// document.querySelector('.score').textContent = 6;
// document.querySelector('guess').value = 23;
// console.log(document.querySelector('guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No number';
  }

  //when player wins
  else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '🎉correct number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎇You lost!';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }

  //when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎇You lost!';
      document.querySelector('body').style.backgroundColor = ' red';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
secretNumber = Math.trunc(Math.random() * 20) + 1;
score = 20;

  

  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  
});
