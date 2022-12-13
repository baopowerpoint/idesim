import { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { useAuthContext } from "./useAuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [isCancelled, setIsCancelled] = useState(false);

  const login = async (email, password) => {
    setIsPending(true);
    setError(null);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "LOGIN", payload: res.user });
      await updateDoc(doc(db, "users", res.user.uid), { isOnline: true });
      //make sure that components doesnt unmount

      setError(null);
      setIsPending(false);
    } catch (e) {
      console.log(e);
      setError(e.message);
      setIsPending(false);
    }
  };
  //fire when components unmount(cleanup function)
  useEffect(() => {
    console.log(isCancelled);
    return () => setIsCancelled(true);
  }, []);
  return { login, isPending, error };
};
