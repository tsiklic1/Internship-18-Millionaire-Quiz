import { useScore } from "../../providers/ScoreProvider";

const ScoreContainer = () => {
  const { currentScore } = useScore();

  return <div>{currentScore}</div>;
};

export default ScoreContainer;
