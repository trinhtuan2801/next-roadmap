import { Box, Card, Chip, CircularProgress, Typography } from '@mui/joy';

export default function Loading({ children, name }) {
  return (
    <Card color='warning'>
      <Box display='flex' alignItems='center' gap={1}>
        <Typography>{name}</Typography>
        <CircularProgress color='warning' size='sm' />
      </Box>
      {children}
    </Card>
  );
}
