const chalk = require('chalk');
var readlineSync = require('readline-sync');
const log = console.log;

log(chalk.cyanBright.bgBlack('Welcome to C++ Quiz...'));

console.log(" ");
var userName = readlineSync.question('Hey What is your name?\n');
console.log(" ");
log(chalk.green.bgBlackBright("Lets get Started,  " + userName));
console.log(" ");

var score = 0;


var questions =[
  {
    question: chalk.blueBright(`Which of the following type of class allows only one object of it to be created?           
    [a] Virtual class
    [b] Abstract class
    [c] Singleton class
    [d] Friend class\n`),
    answer:"c"
  },
  {
    question: chalk.blueBright(`Which of the following is not a type of constructor?          
    [a] Copy constructor
    [b] Friend constructor
    [c] Default constructor
    [d] Parameterized constructor\n`),
    answer:"b"
  },
  {
    question: chalk.blueBright(`Which of the following statement will be correct if the function has three arguments passed to it?        
    [a] The trailing argument will be the default argument.
    [b] The first argument will be the default argument.
    [c] The middle argument will be the default argument.
    [d] All the argument will be the default argument.\n`),
    answer:"a"
  },

]

function play(question,answer)
{
  
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer.toLowerCase())
  {
    log(chalk.magentaBright('right answer..'));
    console.log(" ");
    score = score+1;
    log(chalk.red("Your current score is: "+score));
    console.log("\n");
  }
  else
  {
    log(chalk.magentaBright('wrong one'));
    console.log(" ");
    log(chalk.red("Your current score is: "+score));
    console.log("\n");
  }
} 

for(var i =0; i<questions.length;i++)
{
  var que = questions[i];
  play(que.question, que.answer);
}


if(score === 3){
  log(chalk.bgWhite.blackBright('You did well..'));
}
if(score === 2){
  log(chalk.bgWhite.blackBright('You played good..'));
}
if(score === 1){
  log(chalk.bgWhite.blackBright('You need to improve..'));
}
if(score === 0){
  log(chalk.bgWhite.blackBright('You need to improve..'));
}


