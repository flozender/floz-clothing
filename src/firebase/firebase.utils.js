import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBJH4nOdlQTnEeePTfkJZy6KlEyY4Mv4TQ",
  authDomain: "floz-clothing-db.firebaseapp.com",
  databaseURL: "https://floz-clothing-db.firebaseio.com",
  projectId: "floz-clothing-db",
  storageBucket: "floz-clothing-db.appspot.com",
  messagingSenderId: "505078169437",
  appId: "1:505078169437:web:e534e18ba93a2e6f86b2b4",
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
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
