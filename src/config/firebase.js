import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection} from 'firebase/firestore';
import { useEffect } from "react";
import { onSnapshot } from 'firebase/firestore';
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/productSlice";
const firebaseConfig = {
  apiKey: "AIzaSyBgXg36v-aBJujrUhIIzTRU_XB4VqLlZ8Q",
  authDomain: "vcgetir.firebaseapp.com",
  projectId: "vcgetir",
  storageBucket: "vcgetir.appspot.com",
  messagingSenderId: "575114238981",
  appId: "1:575114238981:web:c5a5a90134681b58ebd06c",
  measurementId: "G-SEGMZDQ5Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

//collection okuma
export const productsRef = collection(db, "cvgetir");


export const useProductsListener = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return onSnapshot(productsRef, (snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });

      dispatch(setProducts(docs));
    });
  }, [dispatch]);
};