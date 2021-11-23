import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyAJkF6nwyFC4oGwB_q4Z3c7uVRRMOGo4tQ",
    authDomain: "box-b71ef.firebaseapp.com",
    projectId: "box-b71ef",
    storageBucket: "box-b71ef.appspot.com",
    messagingSenderId: "122682853701",
    appId: "1:122682853701:web:b08c12f40578d9955d962c"
}

initializeApp(config);

const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);