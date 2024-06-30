import { Box, Card, Chip, Typography } from '@mui/joy';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  name: string;
}

export default function CatchAll({ children, name }: Props) {
  return (
    <Card color='success'>
      <Box display='flex' alignItems='center' gap={1}>
        <Typography>{name}</Typography>
        <Chip variant='outlined' color='success'>
          page catch all
        </Chip>
      </Box>
      {children}
    </Card>
  );
}
