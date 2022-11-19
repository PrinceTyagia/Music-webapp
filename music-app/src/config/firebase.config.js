import {getApp,getApps,initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyB2g1YSwtv7a4rUnzmndMjP4ygHc_JxMO8",
  authDomain: "music-app-238ac.firebaseapp.com",
  projectId: "music-app-238ac",
  storageBucket: "music-app-238ac.appspot.com",
  messagingSenderId: "58557841329",
  appId: "1:58557841329:web:f3fcfea3d751b97eeb0790",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export {app,storage}

 