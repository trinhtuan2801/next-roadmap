import Page from '@/app/components/Page';

export default function Product({ params: { productId } }) {
  return <Page name={`Product: ${productId}`} />;
}
