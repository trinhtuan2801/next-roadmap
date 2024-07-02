import Page from '@/components/file-wrapper/Page';
import comments from '@/mocks/comments';

export async function generateStaticParams() {
  return comments.map((comment) => ({
    id: `${comment.id}`,
  }));
}

export default async function DynamicRoute({ params }: { params: { id: string } }) {
  const { id } = params;
  const comment = comments.find((comment) => `${comment.id}` === id);
  return (
    <Page name={`Comment ${id}`}>
      <pre>{JSON.stringify(comment)}</pre>
    </Page>
  );
}
