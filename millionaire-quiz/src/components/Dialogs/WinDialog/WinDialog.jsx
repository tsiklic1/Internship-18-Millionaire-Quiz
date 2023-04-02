import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

const WinDialog = ({ isOpen, onClose }) => {
  const handleRestart = () => {
    onClose();
    window.location.reload();
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
      <DialogTitle>Congratulations, you won $1000000!</DialogTitle>
      <DialogActions>
        <Button onClick={() => handleRestart()}>Restart</Button>
      </DialogActions>
    </Dialog>
  );
};

export default WinDialog;
