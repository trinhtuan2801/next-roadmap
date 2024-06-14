import MyLink from '../components/MyLink';
import Page from '../components/Page';

export default function Products() {
  return (
    <Page name='Products'>
      <MyLink href='/products/keyboard'>Keyboard</MyLink>
      <MyLink href='/products/mouse'>Mouse</MyLink>
    </Page>
  );
}
