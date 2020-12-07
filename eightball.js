let userName = 'Jane';
let userQuestion = 'lets go';
let randomNumber = 0;
let eightBall = 'The end';

userName ? console.log('Hello, Jane!') : console.log('Hello!');

userQuestion ? console.log('Carry on') : console.log('Better luck!');

Math.floor(Math.random() * 8);

switch(randomNumber) {
  case 1:
   console.log('It is certain')
    break;
  case 2:
    console.log('It is decidedly so')
    break;
  case 3:
    console.log('Reply hazy try again')
    break;
  case 4:
    console.log('Cannot predict now')
    break;
  case 5:
    console.log('Do not count on it')
    break;
  case 6:
    console.log('My sources say no')
    break;
  case 7:
    console.log('Outlook not so good')
    break;
  case 8:
    console.log('Sign point to yes')
    break;
  default:
    console.log(`The eight ball answered: ${eightBall}`); 
}
