// Imports
// import serviceAccount from './serviceAccount.json'
const firebaseConfig = require('./importConfig.js');
const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccount.json');

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeApp(
      serviceAccount,
      firebaseConfig.databaseURL
    );
    console.log('Firebase Initialized');

    await firestoreService.restore('./src/components/json-db/cantbreathe.json');
    console.log('Upload Success');
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
