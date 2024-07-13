
export async function GET(request) {
  try {
    const url = new URL(request.url); // or 'https://localhost' if you're using HTTPS
    const origin = url.origin;
    const host = url.host;


    return Response.json({ message: 'hello world',origin, host, status: 'success' });
  } catch (error) {
    return Response.json({ message: error.message, error: error, status: 'error' });
  }
}