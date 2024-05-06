'use client';

import { Button } from '@mui/joy';
import { useRouter } from 'next/navigation';

export default function LoginUI() {
  const router = useRouter();

  return (
    <>
      <Button>Login</Button>
      <Button variant='outlined' onClick={() => router.back()}>
        Back
      </Button>
    </>
  );
}
