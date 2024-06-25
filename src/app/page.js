import MyLink from './components/MyLink';
import Page from './components/Page';

export default function Home() {
  return (
    <Page name='Home'>
      <MyLink href='/dashboard'>Dashboard</MyLink>
      <MyLink href='/products'>Products</MyLink>

      <Page name='Auth'>
        <MyLink href='/login'>Login</MyLink>
        <MyLink href='/register'>Register</MyLink>
      </Page>
    </Page>
  );
}
