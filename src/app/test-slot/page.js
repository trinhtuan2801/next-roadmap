import MyLink from '@/components/MyLink';
import Page from '@/components/Page';

export default function TestSlotPage() {
  return <Page name='test-slot'>
    <MyLink href='/test-slot/subpage1'>Subpage1</MyLink>
  </Page>;
}
