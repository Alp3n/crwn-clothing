import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBk-BzrWetB7G-bzUrihdzxM7hLEgZbMk8',
  authDomain: 'crwn-e9d27.firebaseapp.com',
  databaseURL: 'https://crwn-e9d27.firebaseio.com',
  projectId: 'crwn-e9d27',
  storageBucket: 'crwn-e9d27.appspot.com',
  messagingSenderId: '66790650832',
  appId: '1:66790650832:web:6dfe6bf685ec8a63d43fd5',
  measurementId: 'G-7FD05XHXJY',
};

export const createUserProfileDocument = async (userAuth, rest) => {
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
        ...rest,
      });
    } catch (error) {
      console.log('error creating user', error.message);
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
