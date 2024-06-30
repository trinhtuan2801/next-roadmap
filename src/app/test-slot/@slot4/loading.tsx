import Loading from '@/components/file-wrapper/Loading';
import { Typography } from '@mui/joy';

export default function Slot4Loading() {
  return (
    <Loading name='slot-4'>
      <Typography level='body-sm'>page, catchAll, loading</Typography>
    </Loading>
  );
}
