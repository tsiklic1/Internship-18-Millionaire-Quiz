import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

const ConfirmAnswerDialog = ({ isOpen, onClose, onSubmit }) => {
  console.log("typeof onSubmit", typeof onSubmit);
  const handleSubmit = () => {
    console.log("typeof onSubmit brrrrrrr", typeof onSubmit);
    onSubmit();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Is that your final answer?</DialogTitle>
      <DialogActions>
        <Button onClick={handleSubmit}>Yes</Button>
        <Button onClick={onClose}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmAnswerDialog;
