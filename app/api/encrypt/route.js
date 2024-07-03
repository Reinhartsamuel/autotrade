import CryptoJS from 'crypto-js';
export async function POST(request) {
    try {
        const body = await request.json();
        const searchParams = request.nextUrl.searchParams;
        // const originalString = searchParams.get('text');
        const originalString = body.originalString;


        const json = { "installed": { "client_id": "167715247415-7rqv8e7nc3brn1jgtvqsi8r19k3mjt0c.apps.googleusercontent.com", "project_id": "saudagar-staging", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_secret": "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", "redirect_uris": ["http://localhost"] } };



        const encryptedString = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(originalString));



        const base64EncodedString = encryptedString;
        const bytes = CryptoJS.enc.Base64.parse(base64EncodedString);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);

        return Response.json({ originalString, encryptedString, base64EncodedString, originalText, stringJson : JSON.stringify(json) });
    } catch (error) {
        return Response.json({ status : false, message : error.message })
    }
  }