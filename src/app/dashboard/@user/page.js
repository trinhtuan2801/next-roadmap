import { wait } from '@/utils/wait';
import { Card, Typography } from '@mui/joy';

export default async function User() {
  await wait(2000);

  return (
    <Card>
      <Typography level='title-lg'>User</Typography>
    </Card>
  );
}
