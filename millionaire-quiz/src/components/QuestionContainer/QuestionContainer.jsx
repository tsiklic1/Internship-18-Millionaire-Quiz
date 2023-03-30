import { useQuestions } from "../../providers/QuestionsProvider";

const QuestionContainer = () => {
  const { currentQuestion } = useQuestions();

  return (
    <div className="question-container">
      <p>{currentQuestion.question}</p>
    </div>
  );
};

export default QuestionContainer;
