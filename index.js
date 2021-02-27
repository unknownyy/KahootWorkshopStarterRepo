// Kahoot Workshop Starter Repo
const Kahoot = require("kahoot.js-updated");
const client = new Kahoot();

client.join('04182685', Math.random() + "- You");

client.on("QuizStart", () => {
  console.log("The quiz has started!");
});

client.on("QuizEnd", () => {
  console.log("The quiz has ended.");
});

client.on("QuestionStart", question => {
  console.log("New question!");
  console.log(question.question);
  console.log("Answering Option A, I don't even know what it is!");
  question.answer(0);
});

function verifyProperty(array, property) {
  let finalNo
  array.forEach(function(value, i) {
    if (value[property] === true) {finalNo = i}
  });
  return(finalNo)
}