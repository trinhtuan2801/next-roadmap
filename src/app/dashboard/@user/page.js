import Page from '@/app/components/Page';
import { wait } from '@/utils/wait';

export default async function User() {
  await wait(2000);

  return <Page name='User' />;
}
