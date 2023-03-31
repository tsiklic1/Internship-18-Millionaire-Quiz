import { useDialog, DIALOG } from "../../providers/DialogProvider";
import ConfirmAnswerDialog from "./ConfirmAnswerDialog";
const DialogSwitch = () => {
  const { activeDialog, additionalProps, close } = useDialog();

  return (
    <>
      <ConfirmAnswerDialog
        isOpen={activeDialog === DIALOG.CONFIRM_ANSWER_DIALOG}
        {...additionalProps}
        onClose={close}
      />
    </>
  );
};

export default DialogSwitch;
