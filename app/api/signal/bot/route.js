import { adminDb } from '../../../../lib/firebase-admin-config';

export async function POST (request) {
    try {
        const body = await request.json();
        const doc = await adminDb.collection("test_bot").doc("kJ0kz97t4NxgKdwpbYxY").get();
        const data = doc.data();

        await adminDb.collection("test_bot").add({
            ...body
        });

        await fetch('https://app.3commas.io/trade_signal/trading_view' ,{
            method : 'POST',
            body : JSON.stringify(body)

        })

        return new Response('Signal success!', {
            status: 200,
          })
    } catch (error) {
        return Response.json({
            status : false,
            message : error.message,
            error : JSON.stringify(error)
        })
    }
}