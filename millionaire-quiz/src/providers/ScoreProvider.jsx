import { createContext, useState, useContext } from "react";

import { scores } from "../utils";

const defaultContext = {
  currentScore: scores[0],
  setCurrentScore: () => {},
};

export const ScoreContext = createContext(defaultContext);

const ScoreProvider = ({ children }) => {
  console.log(children);
  const [currentScore, setCurrentScore] = useState(defaultContext.currentScore);

  const changeScore = () => {
    setCurrentScore((prev) => {
      const index = scores.findIndex((score) => score === prev);
      return scores[index + 1];
    });
  };
  return (
    <ScoreContext.Provider value={{ currentScore, changeScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => useContext(ScoreContext);

export default ScoreProvider;
