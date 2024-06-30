import { Box, Card, Chip, Typography } from '@mui/joy';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  name: string;
}
export default function Layout({ children, name }: Props) {
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
