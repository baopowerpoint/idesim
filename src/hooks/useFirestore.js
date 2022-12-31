import { useReducer, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import { storage } from "../firebase/firebaseConfig";
import { getDownloadURL, ref } from "firebase/storage";
import { uploadBytesResumable } from "firebase/storage";
import { updateProfile } from "firebase/auth";

const initialState = {
  document: null,
  isPending: false,
  success: null,
  error: null,
};
//reducer function
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { document: null, success: false, error: null, isPending: true };
    case "ADDED_DOCUMENT":
      return {
        error: null,
        success: true,
        document: action.payload,
        isPending: false,
      };
    case "DELETED_DOCUMENT":
      return {
        error: null,
        success: true,
        document: null,
        isPending: false,
      };
    case "UPDATED_DOCUMENT":
      return {
        error: null,
        success: true,
        document: action.payload,
        isPending: false,
      };
    case "ERROR":
      return {
        error: action.payload,
        success: false,
        document: null,
        isPending: false,
      };
    default:
      return state;
  }
};

export const useFirestore = (collectionName) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);
  const [progress, setProgress] = useState(null);

  //only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };
  const addDocument = async (doc, uid) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const res = await addDoc(collection(db, collectionName), {
        ...doc,
        createdAt: serverTimestamp(),
        uid,
      });

      dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payload: res });
    } catch (e) {
      dispatchIfNotCancelled({ type: "ERROR", payload: e.message });
    }
  };
  const addDocumentWithImage = async (doc, uid, thumbnail, category) => {
    dispatch({ type: "IS_PENDING" });
    const uploadPath = `thumbnails/${category}/${thumbnail.name}`;
    const storageRef = ref(storage, uploadPath);
    console.log(1);
    const uploadTask = uploadBytesResumable(storageRef, thumbnail);
    console.log(2);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
      },
      async () => {
        const imgUrl = await getDownloadURL(uploadTask.snapshot.ref);
        try {
          const res = await addDoc(collection(db, collectionName), {
            ...doc,
            createdAt: serverTimestamp(),
            uid,
            imgUrl,
          });

          dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payload: res });
        } catch (e) {
          dispatchIfNotCancelled({ type: "ERROR", payload: e.message });
        }
      }
    );
  };
  const addCourse = async (doc, thumbnail, category, name) => {
    dispatch({ type: "IS_PENDING" });
    const uploadPath = `courseThumbnails/${category}/${thumbnail.name}`;
    const storageRef = ref(storage, uploadPath);
    console.log(1);
    const uploadTask = uploadBytesResumable(storageRef, thumbnail);
    console.log(2);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
      },
      async () => {
        const imgUrl = await getDownloadURL(uploadTask.snapshot.ref);
        try {
          const res = await addDoc(collection(db, collectionName), {
            ...doc,
            createdAt: serverTimestamp(),
            thumbnail: imgUrl,

            tutor: {
              avatar:
                "https://firebasestorage.googleapis.com/v0/b/idesim-client.appspot.com/o/tutor%2Favatar%2F109152395_582449549085340_6386687761658922272_n.jpg?alt=media&token=a6af564e-eaaa-4398-8d97-57c0f603ed3a",
              name: name,
            },
          });

          dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payload: res });
        } catch (e) {
          dispatchIfNotCancelled({ type: "ERROR", payload: e.message });
        }
      }
    );
  };
  const updateAvatar = async (id, user, thumbnail) => {
    dispatch({ type: "IS_PENDING" });
    const uploadPath = `avatar/${id}/${thumbnail.name}`;
    const storageRef = ref(storage, uploadPath);

    const uploadTask = uploadBytesResumable(storageRef, thumbnail);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
      },
      async () => {
        const imgUrl = await getDownloadURL(uploadTask.snapshot.ref);
        try {
          const res = await updateDoc(doc(db, collectionName, id), { imgUrl });
          await updateProfile(user, { photoURL: imgUrl });

          dispatchIfNotCancelled({ type: "UPDATED_DOCUMENT", payload: res });
        } catch (e) {
          dispatchIfNotCancelled({ type: "ERROR", payload: e.message });
        }
      }
    );
  };
  const updateDocument = async (id, updates) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const updatedDoc = await updateDoc(doc(db, collectionName, id), updates);

      dispatch({ type: "UPDATED_DOCUMENT", payload: updatedDoc });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "ERROR", payload: error.message });
    }
  };
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });
    try {
      await deleteDoc(doc(db, collectionName, id));
      dispatch({ type: "DELETED_DOCUMENT" });
    } catch (err) {
      console.log(err);
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  //handling components unmount

  return {
    addDocument,
    addDocumentWithImage,
    deleteDocument,
    addCourse,
    updateDocument,
    updateAvatar,
    response,
    progress,
  };
};
