import Layout from '@/components/file-wrapper/Layout';
import MyLink from '@/components/MyLink';
import { Box, Typography } from '@mui/joy';
import { PropsWithChildren, ReactNode } from 'react';

interface Props extends PropsWithChildren {
  slot1: ReactNode;
  slot2: ReactNode;
  slot3: ReactNode;
  slot4: ReactNode;
}

export default function SlotRouteLayout({ children, slot1, slot2, slot3, slot4 }: Props) {
  return (
    <Layout name='test-slot'>
      <Typography level='body-sm'>*There's no sub-route-2</Typography>
      <Box display='flex' gap={2}>
        <MyLink href='/test-slot/sub-route-1'>sub-route-1</MyLink>
        <MyLink href='/test-slot/sub-route-2'>sub-route-2</MyLink>
      </Box>
      {children}
      {slot1}
      {slot2}
      {slot3}
      {slot4}
    </Layout>
  );
}
