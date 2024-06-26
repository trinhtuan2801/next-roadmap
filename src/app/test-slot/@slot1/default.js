import Default from '@/components/Default';
import { Typography } from '@mui/joy';

export default function Slot1Default() {
  return (
    <Default name='slot-1'>
      <Typography level='body-sm'>page, default, sub-route-1</Typography>
    </Default>
  );
}
