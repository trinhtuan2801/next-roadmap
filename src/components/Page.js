import { Card, Typography } from '@mui/joy';

export default function Page({ children, name }) {
  return (
    <Card color='primary' variant='soft'>
      <Typography>{name} page</Typography>
      {children}
    </Card>
  );
}
