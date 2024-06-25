import Layout from '@/components/Layout';

export default function SlotRouteLayout({ children, slot1, slot2 }) {
  return (
    <Layout name='test-slot'>
      {children}
      {slot1}
      {slot2}
    </Layout>
  );
}
