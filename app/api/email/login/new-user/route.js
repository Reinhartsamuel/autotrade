import moment from 'moment';

export async function POST(request) {
    const body = await request.json();
    const htmlContent = `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Document</title>
        <style>
        *{padding:0; margin : 0; font-family:Arial, Helvetica, sans-serif}
        </style>
    </head>
    <body>
        <div style='width:100%; display:flex; justify-content:center;align-items:center;'>
          <div style='display:table-row;flex-direction:column; justify-content:center;align-items:center;'>
          <h1 style='margin-bottom:50px'>Selamat datang di byScript.io!</h1>
          <a href='https://byscript.io/affililate' style='display:flex; justify-content:center;align-items:center;'>
          </a>
          <div style='margin-top:50px'>
              Hai, <strong>${body?.name}</strong>, terima kasih sudah melakukan registrasi. Silakan isi OTP 021890
          </div>
        </div
      </div>
    </body>
    </html>`


    const emailBody = {
    sender: {
      name: "byScript.io",
      email: "edwinfardyanto@gmail.com"
    },
    to: [
      {
        email: body?.email,
        name: body?.name
      }
    ],
    subject:"Registrasi byScript",
    params : {
        LOGO_IMAGE_URL : "https://i.ibb.co.com/RB9rQy3/Whats-App-Image-2024-05-19-at-16-02-06.jpg"
    },
    htmlContent: htmlContent 
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
  