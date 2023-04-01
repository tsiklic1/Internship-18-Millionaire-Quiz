import { useState } from "react";
import { useDialog, DIALOG } from "../../providers/DialogProvider";
import { useQuestions } from "../../providers/QuestionsProvider";

const Jokers = ({ setClicked5050 }) => {
  const { activeDialog, open } = useDialog();
  const { currentQuestion } = useQuestions();

  const [used5050, setUsed5050] = useState(false);
  const [usedPhoneAFriend, setUsedPhoneAFriend] = useState(false);

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
    console.log("friendAnswer", friendAnswer);
    open(DIALOG.PHONE_A_FRIEND_DIALOG, {
      sendFriendAnswer: friendAnswer,
    });
    setUsedPhoneAFriend(true);
  };

  return (
    <div>
      <button disabled={used5050} onClick={() => handle5050()}>
        50:50
      </button>
      <button disabled={usedPhoneAFriend} onClick={() => handlePhoneAFriend()}>
        Phone a friend
      </button>
      <button>Audience</button>
    </div>
  );
};

export default Jokers;
