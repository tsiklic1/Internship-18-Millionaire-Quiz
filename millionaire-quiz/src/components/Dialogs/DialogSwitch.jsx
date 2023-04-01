import { useDialog, DIALOG } from "../../providers/DialogProvider";
import AudienceDialog from "./AudienceDialog/AudienceDialog";
import ConfirmAnswerDialog from "./ConfirmAnswerDialog";
import PhoneAFriendDialog from "./PhoneAFriendDialog/PhoneAFriendDialog";
const DialogSwitch = () => {
  const { activeDialog, additionalProps, close } = useDialog();

  return (
    <>
      <ConfirmAnswerDialog
        isOpen={activeDialog === DIALOG.CONFIRM_ANSWER_DIALOG}
        {...additionalProps}
        onClose={close}
      />
      <PhoneAFriendDialog
        isOpen={activeDialog === DIALOG.PHONE_A_FRIEND_DIALOG}
        {...additionalProps}
        onClose={close}
      />
      <AudienceDialog
        isOpen={activeDialog === DIALOG.AUDIENCE_DIALOG}
        {...additionalProps}
        onClose={close}
      />
    </>
  );
};

export default DialogSwitch;
