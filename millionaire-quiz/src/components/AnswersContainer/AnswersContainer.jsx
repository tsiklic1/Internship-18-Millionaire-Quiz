import { useQuestions } from "../../providers/QuestionsProvider";
import { letters } from "../../utils";
import { useDialog, DIALOG } from "../../providers/DialogProvider";
import { useScore } from "../../providers/ScoreProvider";
import clsx from "clsx";
import { useEffect, useState } from "react";
import classes from "./index.module.css";

const AnswersContainer = ({ clicked5050, setClicked5050 }) => {
  const { activeDialog, open } = useDialog();

  const { currentQuestion, changeQuestion } = useQuestions();
  const { currentScore, changeScore } = useScore();
  const answers = currentQuestion.options;

  const [tempStyles, setTempStyles] = useState(false);
  const [clickedId, setClickedId] = useState(null);

  const [transparentAnswers, setTransparentAnswers] = useState([]);

  const handleClick = (e, option) => {
    setClickedId(option.id);
    open(DIALOG.CONFIRM_ANSWER_DIALOG, {
      onSubmit: () => {
        setTempStyles(true);
        if (option.isCorrect) {
          setTimeout(() => {
            changeQuestion();
            setTempStyles(false);
            setClicked5050(false);
            setTransparentAnswers([]);
          }, 5);
        } else {
          setTimeout(() => {
            setTempStyles(false);
          }, 3000);
        }
        changeScore(option.isCorrect);
      },
    });
  };

  useEffect(() => {
    if (clicked5050) {
      const wrongAnswers = answers.filter((answer) => !answer.isCorrect);
      setTransparentAnswers((prev) => {
        return [...prev, wrongAnswers[0].id, wrongAnswers[1].id];
      });
    }
  }, [clicked5050]);

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
              [classes.hover]:
                activeDialog === DIALOG.CONFIRM_ANSWER_DIALOG &&
                clickedId === option.id,
              [classes.transparent]: transparentAnswers.includes(option.id),
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
