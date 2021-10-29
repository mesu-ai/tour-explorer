const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_api_Key,
    authDomain:process.env.REACT_APP_FIREBASE_auth_Domain,
    projectId:process.env.REACT_APP_FIREBASE_project_Id,
    storageBucket:process.env.REACT_APP_FIREBASE_storage_Bucket,
    messagingSenderId:process.env.REACT_APP_FIREBASE_messaging_SenderId,
    appId:process.env.REACT_APP_FIREBASE_app_Id,
    measurementId:process.env.REACT_APP_FIREBASE_measurement_Id,
  };
export default firebaseConfig;  