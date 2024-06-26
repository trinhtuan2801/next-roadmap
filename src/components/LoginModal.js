'use client';

import { Box, Button, Modal, ModalClose, ModalDialog } from '@mui/joy';
import { useRouter } from 'next/navigation';

export default function LoginModal() {
  const router = useRouter();

  return (
    <Modal open={true}>
      <ModalDialog>
        <Box>Login</Box>
        <ModalClose
          onClick={() => {
            router.back();
          }}
        />
      </ModalDialog>
    </Modal>
  );
}
