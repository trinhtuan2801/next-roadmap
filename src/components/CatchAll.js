import { Card, Typography } from '@mui/joy';

export default function CatchAll({ children, name }) {
  return (
    <Card color='danger'>
      <Typography>{name} catch all</Typography>
      {children}
    </Card>
  );
}
