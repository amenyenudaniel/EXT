import { initializeApp } from 'firebase/app'
import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBhE1zQJplQP5KP3s8hCqpV62Z95MPUV8U',
  authDomain: 'helpmeout-aa6c1.firebaseapp.com',
  projectId: 'helpmeout-aa6c1',
  storageBucket: 'helpmeout-aa6c1.appspot.com',
  messagingSenderId: '497957870389',
  appId: '1:497957870389:web:9862df6282447a292fca7c',
  measurementId: 'G-V4M2N1HYSK',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const facebookProvider = new FacebookAuthProvider()
const googleProvider = new GoogleAuthProvider()

export { auth, facebookProvider, googleProvider }
