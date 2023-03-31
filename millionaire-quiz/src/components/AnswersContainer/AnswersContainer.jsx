import { useQuestions } from "../../providers/QuestionsProvider";
import { letters, shuffleArray } from "../../utils";
import { useDialog, DIALOG } from "../../providers/DialogProvider";
import { useScore } from "../../providers/ScoreProvider";

import classes from "./index.module.css";

const AnswersContainer = () => {
  const { open } = useDialog();

  const { currentQuestion, changeQuestion } = useQuestions();
  const { currentScore, changeScore } = useScore();
  const answers = currentQuestion.options;

  const handleClick = (option) => {
    console.log("handleclick", option);
    open(DIALOG.CONFIRM_ANSWER_DIALOG, {
      onSubmit: () => {
        console.log("submit", option);
        if (option.isCorrect) {
          console.log("correct");
          //updateat score
          //updateat current question
          changeQuestion();
        } else {
          alert("Wrong answer, you lost!");
        }
        changeScore(option.isCorrect);
      },
    });
  };

  return (
    <div className={classes.answersContainer}>
      {answers.map((option, i) => (
        <button
          className={classes.answerButton}
          option={option}
          onClick={(e) => handleClick(option)}
          key={option.id}
        >
          {letters[i]} {option.option}
        </button>
      ))}
    </div>
  );
};

export default AnswersContainer;
