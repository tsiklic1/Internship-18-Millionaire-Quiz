import { useQuestions } from "../../providers/QuestionsProvider";
import { letters } from "../../utils";
import { useDialog, DIALOG } from "../../providers/DialogProvider";
import { useScore } from "../../providers/ScoreProvider";
import clsx from "clsx";
import { useState } from "react";
import classes from "./index.module.css";

const AnswersContainer = () => {
  const { open } = useDialog();

  const { currentQuestion, changeQuestion } = useQuestions();
  const { currentScore, changeScore } = useScore();
  const answers = currentQuestion.options;
  const [tempStyles, setTempStyles] = useState(false);
  const [clickedId, setClickedId] = useState(null);

  const handleClick = (e, option) => {
    setClickedId(option.id);
    console.log("handleclick", option);
    open(DIALOG.CONFIRM_ANSWER_DIALOG, {
      onSubmit: () => {
        setTempStyles(true);
        console.log("submit", option);
        if (option.isCorrect) {
          console.log("correct");
          setTimeout(() => {
            console.log("čeka se");
            changeQuestion();
            setTempStyles(false);
          }, 3000);
        } else {
          setTimeout(() => {
            setTempStyles(false);
          }, 3000);
        }
        changeScore(option.isCorrect);
      },
    });
  };

  return (
    <div className={classes.answersContainer}>
      {answers.map((option, i) => (
        <button
          disabled={tempStyles}
          className={
            classes.answerButton +
            " " +
            clsx({
              [classes.correct]: option.isCorrect && tempStyles,
              [classes.wrong]:
                !option.isCorrect && tempStyles && clickedId === option.id,
            })
          }
          onClick={(e) => handleClick(e, option)}
          key={option.id}
        >
          {letters[i]} {option.option}
        </button>
      ))}
    </div>
  );
};

export default AnswersContainer;
