import { adminDb } from "../../../lib/firebase-admin-config";

export async function POST (request) {
    try {
        const body = await request.json();
        const id = await adminDb.collection('webhook').add({
            ...body,
            createdAt : new Data(),
            type: 'signal'
        });
        return Response.json({
            status : true,
            mesage: 'Signal added successfully',
            id : id
        })
    } catch (error) {
        return Response.json({
            status : false,
            message : error.message,
            error
        })
    }
}