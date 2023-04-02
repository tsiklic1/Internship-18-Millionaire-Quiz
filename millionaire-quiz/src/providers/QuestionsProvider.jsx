import { createContext, useState, useContext } from "react";
import questions from "../questions.json";
import { shuffleArray } from "../utils";

const shuffledArray = shuffleArray(questions);

for (let el of shuffledArray) {
  shuffleArray(el.options);
}

const defaultContext = {
  currentQuestion: shuffledArray[0],
  setCurrentQuestion: () => {},
};

export const QuestionContext = createContext(defaultContext);

const QuestionsProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(
    defaultContext.currentQuestion
  );

  const changeQuestion = () => {
    setCurrentQuestion(
      (prev) => shuffledArray[shuffledArray.indexOf(prev) + 1]
    );
  };

  return (
    <QuestionContext.Provider value={{ currentQuestion, changeQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestions = () => useContext(QuestionContext);

export default QuestionsProvider;
