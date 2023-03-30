import { createContext, useState, useContext } from "react";
import questions from "../questions.json";
import { shuffleArray } from "../utils";

const shuffledArray = shuffleArray(questions);

const defaultContext = {
  currentQuestion: shuffledArray[0],
  setCurrentQuestionIndex: () => {},
};

export const QuestionContext = createContext(defaultContext);

const QuestionsProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestionIndex] = useState(
    defaultContext.currentQuestion
  );

  const changeQuestion = () => {
    //ova logika ne funkcionira samo je tu cisto da stoji
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return (
    <QuestionContext.Provider value={{ currentQuestion, changeQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestions = () => useContext(QuestionContext);

export default QuestionsProvider;
