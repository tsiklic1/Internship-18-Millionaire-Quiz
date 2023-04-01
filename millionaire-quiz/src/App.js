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

import "./main.css";

function App() {
  return (
    <div className="App">
      <QuestionsProvider>
        <ScoreProvider>
          <DialogProvider>
            <h1>Millionaire Quiz</h1>
            <div className="wrapper">
              <div className="question-wrapper">
                <QuestionContainer />
                <AnswersContainer />
              </div>
              <div>
                <Jokers />
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
