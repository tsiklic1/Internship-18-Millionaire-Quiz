import QuestionsProvider from "./providers/QuestionsProvider";
import questions from "./questions.json";
import { shuffleArray } from "./utils";

const shuffledArray = shuffleArray(questions);
console.log(shuffledArray);

function App() {
  return (
    <div className="App">
      <QuestionsProvider>
        <h1>Millionaire Quiz</h1>
      </QuestionsProvider>
    </div>
  );
}

export default App;
