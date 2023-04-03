import { useQuestions } from "../../providers/QuestionsProvider";
import { letters } from "../../utils";
import { useDialog, DIALOG } from "../../providers/DialogProvider";
import { useScore } from "../../providers/ScoreProvider";
import clsx from "clsx";
import { useEffect, useState } from "react";
import classes from "./index.module.css";

const AnswersContainer = ({
  clicked5050,
  setClicked5050,
  tempStyles,
  setTempStyles,
}) => {
  const { activeDialog, open } = useDialog();

  const { currentQuestion, changeQuestion } = useQuestions();
  const { changeScore } = useScore();
  const answers = currentQuestion.options;

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
            changeScore(option.isCorrect);
          }, 3000);
        } else {
          setTimeout(() => {
            setTempStyles(false);
            window.location.reload();
            changeScore(option.isCorrect);
          }, 3000);
        }
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
  }, [clicked5050, answers]);

  return (
    <div className={classes.answersContainer}>
      {answers.map((option, i) => (
        <button
          disabled={tempStyles || clicked5050}
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
