function markAnswer(i){
    poll.selectedAnswer = +i;
    try {
      document.querySelector(".poll .answers .answer.selected").classList.remove("selected");
    } catch(msg){}
    document.querySelectorAll(".poll .answers .answer")[+i].classList.add("selected");
    showResults();
  }

document.addEventListener("DOMContentLoaded", function(){
  let poll = {
  question: "Minecraft Mob Vote For DevenSMP",
  answers:[
    "Crab", "Armadillo", "Penguin"
  ],
  pollCount:20,
  answersWeight:[4, 4, 2, 10],
  selectedOption:-1
};

  let pollDOM = {
    question:document.querySelector(".poll .question"),

    options:document.querySelector(".poll .answers")
  };

  pollDOM.question.innerText = poll.question;
  poll.answers.map(function(answer,i){
    return (
      `
      <div class = "answer" onclick="markAnswer('${i}')">
      ${answer}
      <span class = "percentage-bar"></span>
      <span class = "percentage-value"></span>
      </div>
      `
    );
  }).join("");

  function showResults(){
    let answers = document.querySelectorAll(".poll .answers .answer");
    for(let i=0;i<answers.length;i++){
      let percentage = 0;
      if (i == poll.selectedAnswer){
        percentage = Math.round(
          (poll.answersWeight[i]+1) * 100 / (poll.pollCount+1)
        );
      }

      answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
      answers[i].querySelector(".percentage-value").innerText = percentage + "%";
    }
  }
});
