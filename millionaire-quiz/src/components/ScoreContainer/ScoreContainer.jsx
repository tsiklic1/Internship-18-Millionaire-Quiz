import { useScore } from "../../providers/ScoreProvider";
import { scores } from "../../utils";
import clsx from "clsx";

import classes from "./index.module.css";

const ScoreContainer = () => {
  const { currentScore } = useScore();

  const clonedArray = JSON.parse(JSON.stringify(scores));
  console.log(clonedArray);

  const reversedArray = clonedArray.reverse();

  console.log(reversedArray);
  reversedArray.pop();

  return (
    <div>
      <p>{currentScore}</p>

      {reversedArray.map((score) => (
        <p
          className={clsx({
            [classes.highlighted]:
              score === scores[scores.indexOf(currentScore) + 1],
          })}
          key={score}
        >
          {scores.indexOf(score)} {score}
        </p>
      ))}
    </div>
  );
};

export default ScoreContainer;
