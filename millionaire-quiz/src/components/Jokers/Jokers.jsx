import { useState } from "react";
import { useDialog, DIALOG } from "../../providers/DialogProvider";
import { useQuestions } from "../../providers/QuestionsProvider";
import clsx from "clsx";

import classes from "./index.module.css";

const Jokers = ({ setClicked5050, tempStyles }) => {
  const { open } = useDialog();
  const { currentQuestion } = useQuestions();

  const [used5050, setUsed5050] = useState(false);
  const [usedPhoneAFriend, setUsedPhoneAFriend] = useState(false);
  const [usedAudience, setUsedAudience] = useState(false);

  const handle5050 = () => {
    setClicked5050(true);
    setUsed5050(true);
  };

  const handlePhoneAFriend = () => {
    let friendAnswer;
    if (Math.random() < 0.9) {
      friendAnswer = currentQuestion.options.find(
        (option) => option.isCorrect
      ).option;
    } else {
      const wrongAnswers = currentQuestion.options.filter(
        (option) => !option.isCorrect
      );
      friendAnswer =
        wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)].option;
    }
    open(DIALOG.PHONE_A_FRIEND_DIALOG, {
      sendFriendAnswer: friendAnswer,
    });
    setUsedPhoneAFriend(true);
  };

  const handleAudience = () => {
    let audienceAnswer;
    if (Math.random() < 0.8) {
      audienceAnswer = currentQuestion.options.find(
        (option) => option.isCorrect
      ).option;
    } else {
      const wrongAnswers = currentQuestion.options.filter(
        (option) => !option.isCorrect
      );
      audienceAnswer =
        wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)].option;
    }
    open(DIALOG.AUDIENCE_DIALOG, { sendAudienceAnswer: audienceAnswer });
    setUsedAudience(true);
  };

  return (
    <div>
      <button
        className={
          classes.jokerButton + " " + clsx({ [classes.disabled]: used5050 })
        }
        disabled={used5050 || tempStyles}
        onClick={() => handle5050()}
      >
        50:50
      </button>
      <button
        className={
          classes.jokerButton +
          " " +
          clsx({ [classes.disabled]: usedPhoneAFriend })
        }
        disabled={usedPhoneAFriend || tempStyles}
        onClick={() => handlePhoneAFriend()}
      >
        Phone a friend
      </button>
      <button
        className={
          classes.jokerButton + " " + clsx({ [classes.disabled]: usedAudience })
        }
        disabled={usedAudience || tempStyles}
        onClick={() => handleAudience()}
      >
        Audience
      </button>
    </div>
  );
};

export default Jokers;
