export async function GET(request) {
  try {
    console.log(request.nextUrl, 'this is the request.nexturl');
    console.log(request.cookies, 'this is the request cookies');
    return Response.json({ message: 'hello world' });
  } catch (error) {
    return Response.json({ message: error.message, error:error, status: 'error' });
  }
}
