import moment from 'moment';

export async function POST(request) {
    const body = await request.json();
    const createOrderBody = `<html>
    <head>
      <style>
      *{ padding : 0; margin : 0;font-family:sans-serif}
      div {padding : 10px}
      </style>
    </head>
    <body>
      <div style='display:flex; flex-direction:row; justify-content:space-between;  border-bottom: 2px solid gray;'>
        <img src='https://i.ibb.co.com/RB9rQy3/Whats-App-Image-2024-05-19-at-16-02-06.jpg' alt='logo' width='50px' />
        <h1 style='font-weight:400;'>
        byScript
        </h1>
      </div>
      <div>
      <p>
      Hai, <strong>${body?.name}</strong>
      </p>
      <p>
      Pesanan kamu untuk Plan Pro byScript sedang kami proses. Segera selesaikan pesanan kamu
      </p>
    
      </div>
        <div sytle='margin-top:20'>
      Plan Pro Rp 150,000,-
      </div>
      <div>
      
      </div>
    </body>
    </html>`

    const paidOrderBody = `<html>
    <head>
      <style>
      *{ padding : 0; margin : 0;font-family:sans-serif}
      div {padding : 10px}
      </style>
    </head>
    <body>
      <div style='display:flex; flex-direction:row; justify-content:space-between;  border-bottom: 2px solid gray;'>
        <img src='https://i.ibb.co.com/RB9rQy3/Whats-App-Image-2024-05-19-at-16-02-06.jpg' alt='logo' width='50px' />
        <h1 style='font-weight:400;'>
        byScript
        </h1>
      </div>
      <div>
      <p>
      Hai, <strong>${body?.name}</strong>
      </p>
      <p>
        Pembayaran untuk Pro Plan Berhasil, waktu pembayaran ${moment(body?.time, 'YYYY-MM-DD HH:mm:ss').format('ddd, DD MMM YYYY HH:mm:ss')}, klik di 
        <a href='https://autotrade-tau.vercel.app/'>sini</a> untuk melanjutkan.
      </p>
    
      </div>
        <div sytle='margin-top:20'>
      Plan Pro Rp 150,000,-
      </div>
      <div>
      
      </div>
    </body>
    </html>`



    const emailBody = {
    sender: {
      name: "byScript.io",
      email: "smuel.rr@gmail.com"
    },
    to: [
      {
        email: body?.email,
        name: body?.name
      }
    ],
    subject: body?.type === 'order' ? "Pesanan Pro Plan sedang diproses" : "Pembayaran Berhasil",
    params : {
        LOGO_IMAGE_URL : "https://i.ibb.co.com/RB9rQy3/Whats-App-Image-2024-05-19-at-16-02-06.jpg"
    },
    htmlContent: body?.type === 'order' ? createOrderBody : paidOrderBody
  }

  if (body?.content) emailBody.htmlContent = body?.content;

    try {
        const res = await fetch('https://api.brevo.com/v3/smtp/email', {
            method : 'post',
            body : JSON.stringify(emailBody),
            headers: {
                      'accept': 'application/json',
                      'api-key': process.env.BREVO_API_KEY,
                      'content-type': 'application/json'
                }
        });
        const result = await res.json();
        return Response.json({ ...result});
    } catch (error) {
        return Response.json({ status : false, message : error.message});
    }
  }
  