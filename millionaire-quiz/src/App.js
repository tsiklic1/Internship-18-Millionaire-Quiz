import QuestionsProvider from "./providers/QuestionsProvider";
import questions from "./questions.json";
import { shuffleArray } from "./utils";
import QuestionContainer from "./components/QuestionContainer";
import AnswersContainer from "./components/AnswersContainer";
import ScoreProvider from "./providers/ScoreProvider";
import ScoreContainer from "./components/ScoreContainer/ScoreContainer";

const shuffledArray = shuffleArray(questions);
console.log(shuffledArray);

function App() {
  return (
    <div className="App">
      <QuestionsProvider>
        <ScoreProvider>
          <h1>Millionaire Quiz</h1>
          <QuestionContainer />
          <AnswersContainer />
          <ScoreContainer />
        </ScoreProvider>
      </QuestionsProvider>
    </div>
  );
}

export default App;
