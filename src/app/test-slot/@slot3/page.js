import Slot from '@/components/Slot';
import { Typography } from '@mui/joy';

export default function Slot3() {
  return (
    <Slot name='slot-3'>
      <Typography level='body-sm'>page, catchAll</Typography>
    </Slot>
  );
}
