import { Box } from '@mui/joy';
import MyLink from '../components/MyLink';
import Page from '../components/Page';

export default function DashboardLayout({ children, admin, user, auth }) {
  return (
    <Page name='Dashboard Layout'>
      <Box display='flex' gap={2}>
        <MyLink href='/dashboard'>Dashboard</MyLink>
        <MyLink href='/dashboard/product'>Product</MyLink>
        <MyLink href='/dashboard/login'>Login</MyLink>
      </Box>
      {auth}
      {children}
      {admin}
      {user}
    </Page>
  );
}
