import { Box, Card, Chip, Typography } from '@mui/joy';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  name: string;
}

export default function Page({ children, name }: Props) {
  return (
    <Card color='primary'>
      <Box display='flex' alignItems='center' gap={1}>
        <Typography>{name}</Typography>
        <Chip variant='outlined' color='primary'>
          page
        </Chip>
      </Box>
      {children}
    </Card>
  );
}
