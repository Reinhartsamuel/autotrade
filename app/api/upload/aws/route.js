// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
// import { NextResponse } from 'next/server';

// const s3Client = new S3Client({
//   region: process.env.AWS_REGION,
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   },
// });

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const file = formData.get('file');
//     const name = formData.get('name');
//     return NextResponse.json({ file, name }, { status: 200 });
//     // if (!file) return NextResponse.json({ error: 'File is required!' }, { status: 400 });

//     const fileName = `${Date.now()}-${file.originalname}`;

//     const params = {
//       Bucket: process.env.AWS_S3_BUCKET_NAME,
//       Key: fileName,
//       Body: file.buffer,
//       ContentType: file.mimetype,
//       ACL: 'public-read',
//     };

//     return NextResponse.json({ params }, { status: 200 });
//     const command = new PutObjectCommand(params);
//     const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
//     return NextResponse.json({status : true, imageUrl : url }, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'File is required!' }, { status: 400 });
//   }
// }



import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
	region: process.env.AWS_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	}
});


async function uploadFileToS3(file, fileName) {

	const fileBuffer = file;
	console.log(fileName);

	const params = {
		Bucket: process.env.AWS_S3_BUCKET_NAME,
		Key: `${fileName}`,
		Body: fileBuffer,
		ContentType: "image/jpg"
	}

	const command = new PutObjectCommand(params);
	await s3Client.send(command);
	return fileName;
}

export async function POST(request) {
	try {

		const formData = await request.formData();
		const file = formData.get("file");
        // return NextResponse.json( {file});
		if(!file) {
			return NextResponse.json( { error: "File is required."}, { status: 400 } );
		} 

		const buffer = Buffer.from(await file.arrayBuffer());
		const fileName = await uploadFileToS3(buffer, file.name);

		return NextResponse.json({ success: true, fileName});
	} catch (error) {
		return NextResponse.json({ error });
	}
}