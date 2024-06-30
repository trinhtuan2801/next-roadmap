import SlotCatchAll from '@/components/file-wrapper/SlotCatchAll';
import { Typography } from '@mui/joy';

export default function Slot3CatchAll() {
  return (
    <SlotCatchAll name='slot-3'>
      <Typography level='body-sm'>page, catchAll</Typography>
    </SlotCatchAll>
  );
}
