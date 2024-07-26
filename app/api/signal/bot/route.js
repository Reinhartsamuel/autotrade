import { adminDb } from '../../../../lib/firebase-admin-config';

export async function POST (request) {
    try {
        const body = await request.json();
        const doc = await adminDb.collection("test_bot").doc("kJ0kz97t4NxgKdwpbYxY").get();
        const data = doc.data();

        await adminDb.collection("test_bot").add({
            ...body
        });

        await fetch('/api/email' ,{
            method : 'POST',
            body : JSON.stringify({
                ...body,
                sender: {
                  name: 'byScript.io',
                  email: 'edwinfardyanto@mgail.com',
                },
                bcc: [
                  {
                    name: 'reieie',
                    email: 'reinhartsams@gmail.com',
                  },
                ],
                to: [
                  {
                    email:'edwinfardyanto@mgail.com',
                    name: 'edwin',
                  },
                ],
                subject: 'testing signal bot subscribers',
                htmlContent: `Trading plan : ${data?.trading_plan_name}, bot ids: ${data?.bots_id?.join(', ')}`,
              })

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