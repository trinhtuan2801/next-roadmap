import MyLink from '@/components/MyLink';
import Layout from '@/components/file-wrapper/Layout';
import { Box } from '@mui/joy';
import { PropsWithChildren } from 'react';

export default function DynamicRouteLayout({ children }: PropsWithChildren) {
  return (
    <Layout name='dynamic-route'>
      <Box display='flex' gap={2}>
        <MyLink href='/dynamic-route/1'>comment-1</MyLink>
        <MyLink href='/dynamic-route/2'>comment-2</MyLink>
      </Box>
      {children}
    </Layout>
  );
}
