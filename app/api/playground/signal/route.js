import { adminDb } from '../../../../lib/firebase-admin-config';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const threeCommasUrl = 'https://app.3commas.io/trade_signal/trading_view';
export async function POST(request) {
  const botsArray = ['14359732', '14359733'];

  try {
    const body = await request.json();
    // const result = await Promise.allSettled(
    //   botsArray?.map(async (bot, i) => {
    //     try {
    //       const sendBodyTo3Commas = {
    //         message_type: 'bot',
    //         bot_id: parseInt(bot),
    //         email_token: body?.email_token,
    //         delay_seconds: body?.delay_seconds,
    //         pair: body?.pair,
    //       };
    //       if (body?.action) sendBodyTo3Commas.action = body?.action;
    //       const res = await fetch(threeCommasUrl, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(sendBodyTo3Commas),
    //       });
    //       // const returnValue = await res.json();
    //       const returnValue = await res.text();
    //       console.log(returnValue, 'returnValue');
    //       return { ...returnValue, statusCode: res.status };
    //     } catch (error) {
    //       return error.message;
    //     }
    //   })
    // );
    const res = await adminDb.collection('webhooks').add({
      test:'test',
      createdAt : new Date
    })
    console.log(id)

    // if (Array.isArray(result) && result?.length > 0) {
    //   await Promise.allSettled(
    //     result?.map(async (x) => {
    //       await adminDb.collection('3commas_logs').add({
    //         requestBody: JSON.stringify(body),
    //         createdAt: new Date(),
    //         response:x,
    //       });
    //     })
    //   );
    // }
    // console.log(result, ':::this is the result');
    return Response.json({
      id: res.id,
      message: 'id created',
      status: 'success',
    });
  } catch (error) {
    return Response.json({
      message: error.message,
      error: JSON.stringify(error),
      status: 'error',
    });
  }
}

export const config = {
  async headers() {
    return {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };
  },
};
