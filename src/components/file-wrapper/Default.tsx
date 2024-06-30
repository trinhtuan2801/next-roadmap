import { Box, Card, Chip, Typography } from '@mui/joy';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  name: string;
}
export default function Default({ children, name }: Props) {
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
