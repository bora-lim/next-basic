import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAhu3xKw_ILP1NAxxUpxbc50IJoGHZQ_ho",
  authDomain: "decode-community-c2eaf.firebaseapp.com",
  projectId: "decode-community-c2eaf",
  storageBucket: "decode-community-c2eaf.appspot.com",
  messagingSenderId: "267229528991",
  appId: "1:267229528991:web:adc43b29987d217f6973aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;