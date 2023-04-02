import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { useScore } from "../../../providers/ScoreProvider";
import { useDialog, DIALOG } from "../../../providers/DialogProvider";
const ConfirmAnswerDialog = ({ isOpen, onClose, onSubmit }) => {
  const { open } = useDialog();
  const { currentScore } = useScore();

  const handleSubmit = () => {
    if (currentScore === "$500000") {
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
