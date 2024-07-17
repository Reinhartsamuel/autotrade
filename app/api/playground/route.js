
export async function GET(request) {
  try {
    const url = new URL(request.url); // or 'https://localhost' if you're using HTTPS
    const origin = url.origin;
    const host = url.host;


    // return Response.json({ message: 'hello world',origin, host, status: 'success' });
    return new Response(JSON.stringify({ message: 'hello world',origin, host, status: 'success' }), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  } catch (error) {
    return Response.json({ message: error.message, error: error, status: 'error' });
  }
}