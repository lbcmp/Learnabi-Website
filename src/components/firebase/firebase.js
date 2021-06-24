// import firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
// firebase.initializeApp(config);
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// export const providerGoogle = new firebase.auth.GoogleAuthProvider();
// export const providerGithub = new firebase.auth.GithubAuthProvider();
// export const signUp = (email, password) => {
//   if (email.length > 16 && password.length === 8) {
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         let user = userCredential.user;
//         // console.log(user);
//       })
//       .catch((error) => {
//         console.log(error.code);
//       });
//   }
// };

// export const signIn = (email, password, m) => {
//   if (email.length > 15 && password.length >= 8) {
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         let user = userCredential.user;
//         // console.log(user);
//       })
//       .catch((error) => {
//         // console.log(error.code);
//         console.log(error.message);
//         alert(error.message);
       
  
//       });
//   }
// };

// export default firebase;
