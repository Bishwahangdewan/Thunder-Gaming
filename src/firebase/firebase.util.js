import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, query } from 'firebase/firestore';

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
const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth)
        return

    const ref = doc(db, 'users', userAuth.uid);
    const querySnapshot = await getDoc(ref);

    if (!querySnapshot._document) {
        const { displayName, email } = userAuth;
        const created_at = new Date();

        const data = {
            displayName,
            email,
            created_at,
            ...additionalData
        }

        try {
            const add = doc(db, "users", userAuth.uid);
            await setDoc(add, data)
        } catch (err) {
            console.log(err.message);
        }
    } else {
        console.log("You have already signed in with this email");
    }

    return ref;

}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);