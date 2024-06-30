import comments from '@/mocks/comments';
import { NextRequest } from 'next/server';

export async function GET() {
  return Response.json(comments);
}

export async function POST(req: NextRequest) {
  const comment = await req.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
}
