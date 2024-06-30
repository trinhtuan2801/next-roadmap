import Slot from '@/components/file-wrapper/Slot';
import { wait } from '@/utils/wait';
import { Typography } from '@mui/joy';

export default async function Slot4() {
  await wait(4000);

  return (
    <Slot name='slot-4'>
      <Typography level='body-sm'>page, catchAll, loading</Typography>
    </Slot>
  );
}
