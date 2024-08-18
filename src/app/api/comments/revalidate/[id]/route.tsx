import { CACHE_KEY } from '@/constants';
import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  revalidateTag(`${CACHE_KEY.GET_COMMENT_BY_ID}_${id}`);
  return new Response('ok');
}
