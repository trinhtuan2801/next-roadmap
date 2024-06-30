import comments from '@/mocks/comments';
import { NextRequest } from 'next/server';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const comment = comments.find((c) => c.id === Number(params.id));
    return Response.json(comment);
  } catch (err) {
    return new Response(undefined, { status: 404 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const { text } = body;
  const index = comments.findIndex((c) => c.id === Number(params.id));
  comments[index].text = text;
  return Response.json(comments[index]);
}
