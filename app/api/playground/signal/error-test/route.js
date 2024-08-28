export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.title) throw new Error('no title!');
    if (!body.body) throw new Error('no body!');
    if (!body.userId) throw new Error('no userId!');
    return Response.json(
      { status: true, message: 'Post successfully created', ...body },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { status: false, message: error.message },
      { status: 400 }
    );
  }
}
