import MyLink from '@/components/MyLink';
import Page from '@/components/Page';

export default function Home() {
  return (
    <Page name='Home'>
      <MyLink href='/test-slot'>test-slot</MyLink>
    </Page>
  );
}
