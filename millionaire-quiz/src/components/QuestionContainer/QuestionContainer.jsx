import { useQuestions } from "../../providers/QuestionsProvider";
import DialogSwitch from "../Dialogs";

import classes from "./index.module.css";

const QuestionContainer = () => {
  const { currentQuestion } = useQuestions();

  return (
    <div className={classes.questionContainer}>
      <p>{currentQuestion.question}</p>
      <DialogSwitch />
    </div>
  );
};

export default QuestionContainer;
