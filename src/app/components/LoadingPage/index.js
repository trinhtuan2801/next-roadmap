import { Box, Card, Typography } from '@mui/joy';
import HourGlass from '../HourGlass';

export default function LoadingPage({ name }) {
  return (
    <Card>
      <Box display='flex' alignItems='center'>
        <Typography level='title-lg'>{name}</Typography>
        <HourGlass sx={{ ml: 1 }} />
      </Box>
    </Card>
  );
}
