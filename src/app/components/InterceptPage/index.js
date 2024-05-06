import { Card, Typography } from '@mui/joy';

export default function InterceptPage({ name, children }) {
  return (
    <Card>
      <Typography level='title-lg' sx={{ fontStyle: 'italic' }} color='danger'>
        {name} Intercept
      </Typography>
      {children}
    </Card>
  );
}
