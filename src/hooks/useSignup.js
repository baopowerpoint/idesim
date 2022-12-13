import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { updateProfile, updateEmail } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { setDoc, doc, collection, serverTimestamp } from "firebase/firestore";

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    //try to signup and handle error
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //add displayname to user
      await updateProfile(auth.currentUser, { displayName });
      await updateEmail(auth.currentUser, email);
      await setDoc(doc(db, "users", res.user.uid), {
        isOnline: true,
        profilePicture: null,
        displayName,
        email,
        balances: 0,
        courses: [],
        cart: [],
        likes: [],
        createAt: serverTimestamp(),
      });
      dispatch({ type: "LOGIN", payload: res.user });

      setError(null);
      setIsPending(false);
    } catch (e) {
      console.log(e);
      setError(e.message);
      setIsPending(false);
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { signup, error, isPending };
};
