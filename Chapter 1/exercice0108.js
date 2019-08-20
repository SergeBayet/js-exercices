const readlineSync = require("readline-sync");
let questions = ['An animal', 'A verb', 'A city', 'An adverb', 'A person', 'A thing'];
let answers = [];
nQuestions = questions.length;
for(var i = 0 ; i < nQuestions ; i++)
{
    answers[i] = readlineSync.question("Remaining questions (" + (nQuestions - i) + ") " + questions[i] + '? ');
}

console.log(answers[4] + ' ' + answers[3] + answers[1] + 'ed ' + 
' a ' + answers[0] + ' with a '+ answers[5] + ' in ' + answers[2]);