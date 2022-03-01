import firebase from 'firebase';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  apiKey: "AIzaSyCu9AVkLKo5KEPp5DO1qFvTkwOz2r_aTng",
  authDomain: "neo-life-72f0d.firebaseapp.com",
  projectId: "neo-life-72f0d",
  storageBucket: "neo-life-72f0d.appspot.com",
  messagingSenderId: "343968150114",
  appId: "1:343968150114:web:48faa36edf9b6ddc28573b",
  measurementId: "G-6PC5ZJWWLZ"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;