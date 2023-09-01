// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALdjXbyeKuqN4oRwCKOi_hni8rARyFQaQ",
  authDomain: "nextjs-flex.firebaseapp.com",
  projectId: "nextjs-flex",
  storageBucket: "nextjs-flex.appspot.com",
  messagingSenderId: "189190771134",
  appId: "1:189190771134:web:477127d536e9dcd68229ef",
  measurementId: "G-6CRHG88LRJ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

// Función para iniciar sesión con Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result; // Devuelve el objeto UserCredential
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error);
    throw error;
  }
};

export const signOutUser = async () => {
    try {
      await signOut(auth); // Llama a la función de signOut para cerrar sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  };