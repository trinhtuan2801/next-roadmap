import { Card, Typography } from '@mui/joy';

export default function Slot({ children, name }) {
  return (
    <Card variant='outlined' sx={{ borderStyle: 'dashed' }}>
      <Typography>{name} slot</Typography>
      {children}
    </Card>
  );
}
