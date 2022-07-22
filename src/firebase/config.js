import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOcc10eGDFRe72Nshcwmc6HUAOehKMonw",
  authDomain: "lotusinstrumentos.firebaseapp.com",
  projectId: "lotusinstrumentos",
  storageBucket: "lotusinstrumentos.appspot.com",
  messagingSenderId: "985214259954",
  appId: "1:985214259954:web:13b90d2ce9d33530ceb66b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getFirestoreApp=()=>{
    return app;
}