import { Box, Card, Chip, Typography } from '@mui/joy';

export default function CatchAll({ children, name }) {
  return (
    <Card color='success'>
      <Box display='flex' alignItems='center' gap={1}>
        <Typography>{name}</Typography>
        <Chip variant='solid' color='success'>
          page catch all
        </Chip>
      </Box>
      {children}
    </Card>
  );
}
