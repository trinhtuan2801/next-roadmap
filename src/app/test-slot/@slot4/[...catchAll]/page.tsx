import SlotCatchAll from '@/components/file-wrapper/SlotCatchAll';
import { Typography } from '@mui/joy';

export default function Slot4CatchAll() {
  return (
    <SlotCatchAll name='slot-4'>
      <Typography level='body-sm'>page, catchAll, loading</Typography>
    </SlotCatchAll>
  );
}
