// Kahoot Workshop Starter Repo
const Kahoot = require("kahoot.js-updated");
const client = new Kahoot();

client.join('08234544', Math.random() + "- YY");

client.on("QuizStart", () => {
  console.log("The quiz has started!");
});

client.on("QuizEnd", () => {
  console.log("The quiz has ended.");
});

client.on("QuestionStart", question => {
  question.answer(verifyProperty(question.choices,"correct"));
});

function verifyProperty(array, property) {
  let finalNo
  array.forEach(function(value, i) {
    if (value[property] === true) {finalNo = i}
  });
  return(finalNo)
}