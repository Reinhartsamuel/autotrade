const midtransClient = require("midtrans-client");

export async function POST(request) {
  
  const body = await request.json()
  // return Response.json({ ...body});
  // Create Snap API instance
  let snap = new midtransClient.Snap({
    // Set to true if you want Production Environment (accept real transaction).
    isProduction: false,
    serverKey: "SB-Mid-server-49VuoSq7NIlNfHfR4dSqIpQ4",
  });

  let parameter = {
    transaction_details: {
      order_id: "orderid" +  new Date().getTime(),
      gross_amount: 10000,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      phone: body?.phone,
    },
  };

  try {
      const trx = await snap.createTransaction(parameter);
      return Response.json({ data: {...trx}, body });
  } catch (error) {
    return Response.json({status : false, message : error.message, data : "Error creating snap payment", body})
  }



}
