// // Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDIFp8zohNCeOxx9SCkxT4oN48qGLmwvFE",
//   authDomain: "toletglobe-52b45.firebaseapp.com",
//   projectId: "toletglobe-52b45",
//   storageBucket: "toletglobe-52b45.appspot.com",
//   messagingSenderId: "142121065219",
//   appId: "1:142121065219:web:3deb77bc8eefd18720e736",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const analytics = getStorage(firebase.initializeApp(firebaseConfig));
// export { firebase, analytics };

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getStorage } from "@firebase/storage";
const config = {
  apiKey: "AIzaSyDB8WawUghR0EvJB629035B3PJa8nD-Kiw",
  authDomain: "totel-ad75e.firebaseapp.com",
  projectId: "totel-ad75e",
  storageBucket: "totel-ad75e.appspot.com",
  messagingSenderId: "650881357647",
  appId: "1:650881357647:web:0bad59be8dc008d864173a",
};
firebase.initializeApp(config);
const analytics = getStorage(firebase.initializeApp(config));
export { firebase, analytics };
