import Slot from '@/components/Slot';
import { Typography } from '@mui/joy';

export default function Slot1SubRoute1() {
  return (
    <Slot name='slot-1 / sub-route-1'>
      <Typography level='body-sm'>page, default, sub-route-1</Typography>
    </Slot>
  );
}
