import { adminDb } from '../../lib/firebase-admin-config';

export async function GET() {
  const doc = await adminDb.collection("users").doc("wImZr1fZmkQGazgzcMSk3i1cMDu1").get();
  if (!doc.exists) return Response.json({status : false, message : "user not found", uid :"wImZr1fZmkQGazgzcMSk3i1cMDu1" })
  return Response.json({
    status: true,
    message: "selamat datang",
    data : {...doc.data(), id : doc.id}
  });
}
