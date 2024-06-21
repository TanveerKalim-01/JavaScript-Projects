const checkBoxList = document.querySelectorAll(".custom-checkbox");
const goalInpList = document.querySelectorAll(".goal-input");
const erroLabel = document.querySelector(".error-label");
const progressValue = document.querySelector(".progress-value");
const progressLabel = document.querySelector(".progress-label");
const quoteMsg = document.querySelector(".quote");
const progressMsg = document.querySelector(".progress-value span");

const progressMsgArray = [
  "Raise the bar by completing your goals!",
  "Well begun is half done!",
  "Just a step away, keep going!",
  "Whoa! You just completed all the goals, time for chill :D",
];
const quoteMsgArray = [
  "“Move one step ahead, today!”",
  " “Keep Going, You’re making great progress!” ",
  "“Every step counts!”",
  "“Great job, you did it!”"
];

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
  first: { name: "", completed: false },
  second: { name: "", completed: false },
  third: { name: "", completed: false },
};

let completedGoalsCount = Object.values(allGoals).filter(goal => goal.completed).length;

function updateProgress() {
  progressValue.style.width = `${(completedGoalsCount / checkBoxList.length) * 100}%`;
  progressLabel.innerText = progressMsgArray[completedGoalsCount];
  quoteMsg.innerText = quoteMsgArray[completedGoalsCount];
  progressMsg.innerText = `${completedGoalsCount}/${checkBoxList.length} completed`;
}

updateProgress();

checkBoxList.forEach(checkBox => {
  checkBox.addEventListener("click", () => {
    let allGoalsAdded = [...goalInpList].every(goalInp => goalInp.value);

    if (allGoalsAdded) {
      checkBox.classList.toggle("completed");
      checkBox.nextElementSibling.toggleAttribute("disabled");

      let inpId = checkBox.nextElementSibling.id;
      allGoals[inpId].completed = !allGoals[inpId].completed;
      completedGoalsCount = Object.values(allGoals).filter(goal => goal.completed).length;
      localStorage.setItem("allGoals", JSON.stringify(allGoals));

      updateProgress();
    } else {
      erroLabel.style.visibility = "visible";
    }
  });
});

goalInpList.forEach(goalInp => {
  goalInp.value = allGoals[goalInp.id].name;

  if (allGoals[goalInp.id].completed) {
    goalInp.previousElementSibling.classList.add("completed");
    goalInp.toggleAttribute("disabled");
  }

  goalInp.addEventListener("focus", () => {
    erroLabel.style.visibility = "hidden";
  });

  goalInp.addEventListener("input", e => {
    allGoals[goalInp.id] = { name: goalInp.value};
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});
