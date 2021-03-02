import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBMk4EM1mKJ36tpKfPnl2ErPwQ8Z7T4UTk",
  authDomain: "vostokru-tv.firebaseapp.com",
  databaseURL: "https://vostokru-tv-default-rtdb.firebaseio.com",
  projectId: "vostokru-tv",
  storageBucket: "vostokru-tv.appspot.com",
  messagingSenderId: "419593566136",
  appId: "1:419593566136:web:db35046c6b798faab2c14d"
};

firebase.initializeApp(firebaseConfig)

export default firebase