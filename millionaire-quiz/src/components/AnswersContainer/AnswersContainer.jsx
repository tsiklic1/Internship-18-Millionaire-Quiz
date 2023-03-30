import { useQuestions } from "../../providers/QuestionsProvider";
import { letters } from "../../utils";

const AnswersContainer = () => {
  const { currentQuestion } = useQuestions();

  return (
    <div>
      {currentQuestion.options.map((option, i) => (
        <button key={option.id}>
          {letters[i]} {option.option}
        </button>
      ))}
    </div>
  );
};

export default AnswersContainer;
