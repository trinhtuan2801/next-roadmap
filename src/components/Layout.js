import { Box, Card, Chip, Typography } from '@mui/joy';

export default function Layout({ children, name }) {
  return (
    <Card color='warning' variant='soft'>
      <Box display='flex' alignItems='center' gap={1}>
        <Typography>{name}</Typography>
        <Chip variant='solid' color='warning'>
          layout
        </Chip>
      </Box>
      <Card>{children}</Card>
    </Card>
  );
}
