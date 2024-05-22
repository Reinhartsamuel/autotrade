import CryptoJS from "crypto-js";
import Base64 from "crypto-js/enc-base64";
import { db } from "../../../lib/firebase-admin-config";

const appMode = process.env.NEXT_PUBLIC_APP_MODE;

export async function POST(request) {
  const body = await request.json();
  const { order_id, status_code, gross_amount,transaction_status, signature_key } = body;

  const serverKey = appMode === "staging" ?  process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY_SANDBOX : "kontoll"

  //create hash 
  const hash = CryptoJS.SHA512(order_id + status_code + gross_amount + serverKey)
  const hashString = hash.toString(CryptoJS.enc.Hex);
  
  //compare signature key
  if (signature_key !== hashString) {
    console.log("Invalid signature key", order_id);
    return Response.json({ status: false, message: "Invalid signature key", serverKey, hashString, signature_key });
  }
  //update payment status only if transaction status is settlement
  if (transaction_status === "settlement") {
    try {
      const res = await db.collection("orders").doc(order_id).update({
        paymentStatus: "PAID",
      });
      console.log(res, 'res');
      return Response.json({ message : "success" });
    } catch (error) {
      return Response.json({ status: false, message: JSON.stringify(error) });
    }
  }
}
