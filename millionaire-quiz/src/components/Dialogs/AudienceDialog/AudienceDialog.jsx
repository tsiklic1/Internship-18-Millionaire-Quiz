import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

const AudienceDialog = ({ isOpen, onClose, sendAudienceAnswer }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
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
