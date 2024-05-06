import { Card, Typography } from '@mui/joy';

export default function DefaultPage({ name, children }) {
  return (
    <Card>
      <Typography level='title-lg' sx={{ fontStyle: 'italic' }} color='neutral'>
        {name} Default
      </Typography>
      {children}
    </Card>
  );
}
