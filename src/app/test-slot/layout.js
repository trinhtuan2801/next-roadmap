import Layout from '@/components/Layout';
import MyLink from '@/components/MyLink';
import { Box, Typography } from '@mui/joy';

export default function SlotRouteLayout({ children, slot1, slot2, slot3 }) {
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
    </Layout>
  );
}
