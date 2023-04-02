import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

const PhoneAFriendDialog = ({ isOpen, onClose, sendFriendAnswer }) => {
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
      <DialogTitle>I'm 90% sure the answer is {sendFriendAnswer}</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PhoneAFriendDialog;
