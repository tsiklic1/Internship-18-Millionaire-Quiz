import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import "../../../main.css";

const AudienceDialog = ({ isOpen, onClose, sendAudienceAnswer }) => {
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
      <DialogTitle>
        Audience thinks the answer is {sendAudienceAnswer}
      </DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AudienceDialog;
