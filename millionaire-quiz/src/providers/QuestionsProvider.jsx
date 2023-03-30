//unutar ovog zelin da se sprema state o trenutnom pitanju
import { createContext, useState, useContext } from "react";
import questions from "../questions.json";

const defaultContext = {
  currentQuestionIndex: 0,
  setCurrentQuestionIndex: () => {},
};

export const QuestionContext = createContext(defaultContext);

const QuestionsProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    defaultContext.currentQuestionIndex
  );

  const toggleQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return (
    <QuestionContext.Provider value={{ currentQuestionIndex, toggleQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestions = () => useContext(QuestionContext);

export default QuestionsProvider;
