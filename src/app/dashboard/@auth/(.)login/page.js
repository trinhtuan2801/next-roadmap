import LoginUI from '@/app/components/LoginUI';
import { Modal, ModalDialog } from '@mui/joy';

export default function LoginIntercept() {
  return (
    <Modal open={true}>
      <ModalDialog>
        <LoginUI />
      </ModalDialog>
    </Modal>
  );
}
