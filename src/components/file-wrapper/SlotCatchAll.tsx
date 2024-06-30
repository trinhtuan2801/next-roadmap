import { Box, Card, Chip, Typography } from '@mui/joy';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  name: string;
}

export default function SlotCatchAll({ children, name }: Props) {
  return (
    <Card sx={{ borderStyle: 'dashed' }} color='success'>
      <Box display='flex' alignItems='center' gap={1}>
        <Typography>{name}</Typography>
        <Chip variant='outlined' color='success' sx={{ borderStyle: 'dashed' }}>
          slot catch all
        </Chip>
      </Box>
      {children}
    </Card>
  );
}
