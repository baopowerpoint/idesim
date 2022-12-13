import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1nBM0bSzUKhAaap6ziNyDftTP-IwFPGA",
  authDomain: "idesim-client.firebaseapp.com",
  projectId: "idesim-client",
  storageBucket: "idesim-client.appspot.com",
  messagingSenderId: "497210314796",
  appId: "1:497210314796:web:fc1f25c63f19b3fef18189",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Khởi tạo dịch vụ xác thực tài khoản
export const auth = getAuth(app);
//khởi tạo database
export const db = getFirestore(app);
//Khởi tạo storage
export const storage = getStorage(app);
