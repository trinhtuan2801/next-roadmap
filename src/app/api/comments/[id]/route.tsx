import comments from '@/mocks/comments';
import { NextRequest } from 'next/server';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const comment = comments.find((c) => c.id === Number(params.id));
  return Response.json(comment);
}
