import MyLink from '@/app/components/MyLink';
import Page from '@/app/components/Page';
import { Box } from '@mui/joy';

export default function AdminLayout({ children }) {
  return (
    <Page name='Admin Layout'>
      <Box display='flex' gap={2}>
        <MyLink href='/dashboard/product'>Product</MyLink>
        <MyLink href='/dashboard/order'>Order</MyLink>
      </Box>
      {children}
    </Page>
  );
}
