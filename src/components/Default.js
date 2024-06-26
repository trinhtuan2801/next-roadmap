import { Box, Card, Chip, Typography } from '@mui/joy';

export default function Default({ children, name }) {
  return (
    <Card sx={{ borderStyle: 'dashed' }}>
      <Box display='flex' alignItems='center' gap={1}>
        <Typography>{name}</Typography>
        <Chip sx={{ borderStyle: 'dashed' }} variant='outlined'>
          default
        </Chip>
      </Box>
      {children}
    </Card>
  );
}
