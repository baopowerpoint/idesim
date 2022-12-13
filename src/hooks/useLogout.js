import { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { useAuthContext } from "./useAuthContext";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();
  const [isCancelled, setIsCancelled] = useState(false);

  const logout = async () => {
    setIsPending(true);
    setError(null);
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      await updateDoc(doc(db, "users", user.uid), { isOnline: false });

      if (!isCancelled) {
        setError(null);
        setIsPending(false);
      }
    } catch (e) {
      if (!isCancelled) {
        console.log(e);
        setError(e.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);
  return { logout, isPending, error };
};
