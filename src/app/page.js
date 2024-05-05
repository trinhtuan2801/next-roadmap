import { Card, Typography } from '@mui/joy';
import MyLink from './components/MyLink';

export default function Home() {
  return (
    <Card>
      <Typography level='title-lg'>Home</Typography>
      <MyLink href='/dashboard'>Dashboard</MyLink>
    </Card>
  );
}
