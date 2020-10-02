const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DB,
  projectId: process.env.NEXT_PUBLIC_PID,
  storageBucket: process.env.NEXT_PUBLIC_SB,
  messagingSenderId: process.env.NEXT_PUBLIC_SID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MID,
};

export default firebaseConfig;
