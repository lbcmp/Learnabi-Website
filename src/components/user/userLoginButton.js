import React, { useEffect, useState } from "react";
import {
  auth,
  providerGoogle,
  providerGithub,
  firestore,
} from "../firebase/firebase";
import {
  userState,
  selectName,
  userReset,
  selectEmail,
} from "../../redux/user/userSlice";
import { selectAdminEmail } from "../../redux/admin/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "./customButton";

// main function
const UserLoginButton = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectName);
  const email = useSelector(selectEmail);
  const adminEmail = useSelector(selectAdminEmail);

  const signInWithGoogle = () => {
    if (adminEmail === null) {
      auth.signInWithRedirect(providerGoogle);
    } else {
      alert("Please log out from the Admin Account");
    }
  };

  const signInWithGithub = () => {
    if (adminEmail === null) {
      auth.signInWithRedirect(providerGithub);
    } else {
      alert("Please Log out from the Admin Account");
    }
  };

  const signOut = () => {
    auth.signOut();
    dispatch(userReset());
  };

  useEffect(() => {
    if (adminEmail === null) {
      function dispatchUser(name, email, photo, id) {
        dispatch(
          userState({
            displayName: name,
            userEmail: email,
            photoUrl: photo,
            user_id: id,
          })
        );
      }
     
        const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
          if (!userAuth) return;
          if(userAuth.email !== 'admin@learnabi.com'){
            const userRef = firestore.doc(`learnabiUsers/user:${userAuth.uid}`);
            // console.log(userAuth);
            const snapShot = await userRef.get(); //snapShot from cloud firestore
  
            // .exists checks the document for validation => false = not created
            if (!snapShot.exists) {
              const { displayName, email, photoURL, uid } = userAuth;
              const userId = uid.substring(0,6);
              const createdAt = new Date();
  
              try {
                await userRef.set({
                  displayName,
                  email,
                  photoURL,
                  userId,
                  createdAt,
                });
                dispatchUser(displayName, email, photoURL, userId);
              } catch (error) {
                console.log("error creating user", error.message);
              }
            } else {
              const { displayName, email, photoURL, userId } = snapShot.data();
              dispatchUser(displayName, email, photoURL, userId);
            }
          }
        });
        return unsubscribe;
      
    }
  }, [dispatch, adminEmail]);

  // reverse substring
  let em = email ? email.substring(email.lastIndexOf("@") + 1) : "";

  let btns =
    user === null ? (
      <div>
        <CustomButton
          styleC={true}
          clicked={signInWithGoogle}
          btnName="Sign In With Google"
        />
        <CustomButton
          styleC={false}
          clicked={signInWithGithub}
          btnName="Sign In With Github"
        />
      </div>
    ) : null;
  let googleActive =
    em === "gmail.com" && user !== null ? (
      <div>
        <CustomButton styleC={true} clicked={signOut} btnName="Sign Out" />
      </div>
    ) : null;

  let githubActive =
    em !== "gmail.com" && user !== null ? (
      <div>
        <CustomButton styleC={false} clicked={signOut} btnName="Sign Out" />
      </div>
    ) : null;

  return (
    <div>
      {btns}
      {googleActive}
      {githubActive}
    </div>
  );
};
export default UserLoginButton;
