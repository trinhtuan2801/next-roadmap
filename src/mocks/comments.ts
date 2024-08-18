import { wait } from '@/utils/wait';
import { unstable_cache } from 'next/cache';

export const comments = Array.from({ length: 10 }, (_, index) => ({
  id: `${index + 1}`,
  text: `Text ${index + 1}`,
}));

export const getCommentById = async (id: string) => {
  console.log('get comment', id);
  await wait(1000);
  return comments.find((comment) => comment.id === id);
};