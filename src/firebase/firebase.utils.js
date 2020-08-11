import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBEXOcsf2rd3tTBY0dE6JxrGgJc7xKHbvg",
    authDomain: "crown-db-eff7a.firebaseapp.com",
    databaseURL: "https://crown-db-eff7a.firebaseio.com",
    projectId: "crown-db-eff7a",
    storageBucket: "crown-db-eff7a.appspot.com",
    messagingSenderId: "525723269426",
    appId: "1:525723269426:web:644d7323cea64e73fbbf2b"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
                console.log('error creating user', err.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;