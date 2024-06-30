import { Box, Card, Chip, CircularProgress, Typography } from '@mui/joy';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  name: string;
}

export default function Loading({ children, name }: Props) {
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
