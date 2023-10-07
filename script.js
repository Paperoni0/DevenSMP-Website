let poll = {
  question: "Minecraft Mob Vote For DevenSMP",
  options:[
    "Crab", "Armadillo", "Penguin"
  ],
  pollCOunt:20,
  optionsWeight:[4, 4, 2, 10],
  selectedOption:-1
};

let pollDOM = {
  question:document.querySelector(".poll .question"),
  options:document.querySelector(".poll .options")
};

pollDOM.question.innerText = poll.question;
poll.options.map(function(answer,i){
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

function markAnswer(i){
  poll.selectedAnswer = +i;
  try {
    document.querySelector(".poll .options.answer.selected").classList.remove("selected");
  } catch(msg){}
  document.querySelectorAll(".poll .options .answer")[+i].classList.add("selected");
  showresults();
}

function showResults(){
  let answers = document.querySelectorAll(".poll .options .answer");
  for(let i=0;i<answers.length;i++){
    let percentage = 0;
    if (i == poll.selectedAnswer){
      percentage = Math.round(
        (poll.optionsWeight[i]+1) * 100 / (poll.pollCount+1)
      );
    }
    
    answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
    answers[i].querySelector(".percentage-value").innerText = percentage + "%";
  }
}
