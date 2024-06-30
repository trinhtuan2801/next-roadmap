import { Box, Card, Chip, Typography } from '@mui/joy';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  name: string;
}

export default function Slot({ children, name }: Props) {
  return (
    <Card sx={{ borderStyle: 'dashed' }} color='primary'>
      <Box display='flex' alignItems='center' gap={1}>
        <Typography>{name}</Typography>
        <Chip variant='outlined' sx={{ borderStyle: 'dashed' }} color='primary'>
          slot page
        </Chip>
      </Box>
      {children}
    </Card>
  );
}
