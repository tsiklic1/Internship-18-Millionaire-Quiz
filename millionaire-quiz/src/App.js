import QuestionsProvider from "./providers/QuestionsProvider";
import questions from "./questions.json";
import { shuffleArray } from "./utils";
import QuestionContainer from "./components/QuestionContainer";
import AnswersContainer from "./components/AnswersContainer";
import ScoreProvider from "./providers/ScoreProvider";
import ScoreContainer from "./components/ScoreContainer/ScoreContainer";
import DialogProvider from "./providers/DialogProvider";
import DialogSwitch from "./components/Dialogs";
import Jokers from "./components/Jokers";

import { useState } from "react";
import "./main.css";

function App() {
  const [clicked5050, setClicked5050] = useState(false);
  const [clickedAudience, setClickedAudience] = useState(false);
  const [clickedPhone, setClickedPhone] = useState(false);

  return (
    <div className="App">
      <QuestionsProvider>
        <ScoreProvider>
          <DialogProvider>
            <h1>Millionaire Quiz</h1>
            <div className="wrapper">
              <div className="question-wrapper">
                <QuestionContainer />
                <AnswersContainer
                  clicked5050={clicked5050}
                  setClicked5050={setClicked5050}
                />
              </div>
              <div>
                <Jokers
                  clicked5050={clicked5050}
                  setClicked5050={setClicked5050}
                />
                <ScoreContainer />
              </div>
              <DialogSwitch />
            </div>
          </DialogProvider>
        </ScoreProvider>
      </QuestionsProvider>
    </div>
  );
}

export default App;
