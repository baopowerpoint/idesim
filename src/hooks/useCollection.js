import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { onSnapshot, collection, orderBy } from "firebase/firestore";
import { query } from "firebase/firestore";
import { where } from "firebase/firestore";
export const useCollection = (collectionRef, _q, _o) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  //set up query
  const q = useRef(_q).current;
  const o = useRef(_o).current;

  useEffect(() => {
    setIsPending(true);
    let ref = collection(db, collectionRef);

    if (q) {
      ref = query(ref, where(...q));
    }
    if (o) {
      ref = query(ref, orderBy(...o));
    }
    const unSub = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setError(null);
        setIsPending(false);
      },
      (err) => {
        console.log(err);
        setError("could not fetch data");
        setIsPending(false);
      }
    );
    return () => unSub();
  }, [collectionRef, q, o]);

  return { documents, error, isPending };
};
