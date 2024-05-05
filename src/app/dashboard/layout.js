import { Box, Card, Typography } from '@mui/joy';
import MyLink from '../components/MyLink';

export default function DashboardLayout({ children, admin, user }) {
  return (
    <Card>
      <Typography level='title-lg'>Dashboard Layout</Typography>
      <Box display='flex' gap={2}>
        <MyLink href='/dashboard'>Dashboard</MyLink>
        <MyLink href='/dashboard/product'>Product</MyLink>
      </Box>
      {children}
      {admin}
      {user}
    </Card>
  );
}
