import { useScore } from "../../providers/ScoreProvider";

const ScoreContainer = () => {
  const { currentScore } = useScore();
  console.log("current score", currentScore);

  return <div>ačsdlkjfčakj</div>;
};

export default ScoreContainer;
