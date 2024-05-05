import HourGlass from '@/app/components/HourGlass';
import { Box, Card, Typography } from '@mui/joy';

export default function UserLoading() {
  return (
    <Card>
      <Box display='flex' alignItems='center'>
        <Typography level='title-lg'>User</Typography>
        <HourGlass sx={{ ml: 1 }} />
      </Box>
    </Card>
  );
}
