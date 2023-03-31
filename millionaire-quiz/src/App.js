import QuestionsProvider from "./providers/QuestionsProvider";
import questions from "./questions.json";
import { shuffleArray } from "./utils";
import QuestionContainer from "./components/QuestionContainer";
import AnswersContainer from "./components/AnswersContainer";
import ScoreProvider from "./providers/ScoreProvider";
import ScoreContainer from "./components/ScoreContainer/ScoreContainer";
import DialogProvider from "./providers/DialogProvider";
import DialogSwitch from "./components/Dialogs";

// const shuffledArray = shuffleArray(questions);

// for (let el of shuffledArray) {
//   el = shuffleArray(el.options);
// }

// console.log(shuffledArray);

function App() {
  return (
    <div className="App">
      <QuestionsProvider>
        <ScoreProvider>
          <DialogProvider>
            <h1>Millionaire Quiz</h1>
            <QuestionContainer />
            <AnswersContainer />
            <ScoreContainer />
            <DialogSwitch />
          </DialogProvider>
        </ScoreProvider>
      </QuestionsProvider>
    </div>
  );
}

export default App;
