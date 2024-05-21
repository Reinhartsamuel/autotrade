import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';  // Correct the import to use 'firebase-admin/firestore'
const serviceAccount = require('../saudagar-staging.json');

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });
} else {
  getApp();
}

const db = getFirestore();

export { db };
