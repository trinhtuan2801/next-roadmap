import { Card, Typography } from '@mui/joy';

export default function Default({ children, name }) {
  return (
    <Card color='danger'>
      <Typography>{name} default</Typography>
      {children}
    </Card>
  );
}
