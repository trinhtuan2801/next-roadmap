import Page from '@/components/file-wrapper/Page';
import { CACHE_KEY } from '@/constants';
import { comments, getCommentById } from '@/mocks/comments';
import dayjs from 'dayjs';
import { unstable_cache } from 'next/cache';

export async function generateStaticParams() {
  return comments.map(({ id }) => ({
    id,
  }));
}

export default async function DynamicRoute({ params }: { params: { id: string } }) {
  const { id } = params;
  const nextGetCommentById = unstable_cache(
    (id) => {
      return getCommentById(id);
    },
    [],
    { tags: [`${CACHE_KEY.GET_COMMENT_BY_ID}_${id}`] },
  );
  const comment = await nextGetCommentById(id);

  getCommentById(id);
  return (
    <Page name={`Comment ${id}`}>
      <pre>{JSON.stringify(comment)}</pre>
      <pre>{dayjs().format('DD/MM/YYYY - HH:mm:ss')}</pre>
    </Page>
  );
}
