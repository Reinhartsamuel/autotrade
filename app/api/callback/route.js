import CryptoJS from "crypto-js";
import Base64 from "crypto-js/enc-base64";
import { db } from "../../../lib/firebase-admin-config";

const appMode = process.env.NEXT_PUBLIC_APP_MODE;

export async function POST(request) {
  const body = await request.json();
  const { order_id, status_code, gross_amount } = body;

  const serverKey = appMode === "staging" ?  process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY_SANDBOX : "kontoll"

  //create hash
  //SHA512(order_id+status_code+gross_amount+ServerKey)
  const hash = Base64.stringify(
    CryptoJS.SHA512(order_id + status_code + gross_amount + serverKey)
  );
  
  if (body?.signature_key !== hash) {
    return Response.json({ status: false, message: "Invalid signature key" });
  }
  
  if (transaction_status === "settlement") {
    try {
      await db.collection("orders").doc(order_id).update({
        paymentStatus: "PAID",
      });
      return Response.json({ message : "success" });
    } catch (error) {
      return Response.json({ status: false, message: JSON.stringify(error) });
    }
  }
}
