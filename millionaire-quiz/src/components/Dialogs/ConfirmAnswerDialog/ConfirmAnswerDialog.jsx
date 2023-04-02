import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { useQuestions } from "../../../providers/QuestionsProvider";
import { useScore } from "../../../providers/ScoreProvider";
import { useDialog, DIALOG } from "../../../providers/DialogProvider";
const ConfirmAnswerDialog = ({ isOpen, onClose, onSubmit }) => {
  const { activeDialog, open } = useDialog();
  const { currentQuestion } = useQuestions();
  const { currentScore } = useScore();

  const handleSubmit = () => {
    console.log("currentQuestion", currentQuestion);
    console.log("currentScore", currentScore);

    if (currentScore === "$500000") {
      console.log("You won the game");
      //otvorit dialog da je pobedio
      onClose();
      open(DIALOG.WIN_DIALOG);
      return;
    }

    onSubmit();
    onClose();
  };

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: "#0000bb",
        },
      }}
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>Is that your final answer?</DialogTitle>
      <DialogActions>
        <Button onClick={handleSubmit}>Yes</Button>
        <Button onClick={onClose}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmAnswerDialog;
