import { Card, Typography } from '@mui/joy';

export default function CatchAllPage({ name }) {
  return (
    <Card>
      <Typography level='title-lg' sx={{ fontStyle: 'italic' }} color='warning'>
        {name} Catch All
      </Typography>
    </Card>
  );
}
