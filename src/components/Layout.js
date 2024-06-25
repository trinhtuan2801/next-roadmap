import { Card, Typography } from '@mui/joy';

export default function Layout({ children, name }) {
  return (
    <Card color='warning' variant='soft'>
      <Typography>{name} layout</Typography>
      <Card>{children}</Card>
    </Card>
  );
}
