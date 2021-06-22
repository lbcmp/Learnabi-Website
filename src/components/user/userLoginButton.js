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
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "./customButton";

// main function
const UserLoginButton = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectName);
  const email = useSelector(selectEmail);

  const signInWithGoogle = () => {
    auth.signInWithRedirect(providerGoogle);
  };
  const signInWithGithub = () => {
    auth.signInWithRedirect(providerGithub);
  };

  const signOut = () => {
    auth.signOut();
    dispatch(userReset());
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      function dispatchUser(name, email, photo, id) {
        dispatch(
          userState({
            displayName: name,
            email: email,
            photoUrl: photo,
            user_id: id,
          })
        );
      }
      auth.onAuthStateChanged(async (userAuth) => {
        if (!userAuth) return;
        const userRef = firestore.doc(`learnabiUsers/${userAuth.uid}`);
        // console.log(userAuth);
        const snapShot = await userRef.get();
        // .exists checks the document for validation => false = not created
        if (!snapShot.exists) {
          const { displayName, email, photoURL, uid } = userAuth;
          const userId = uid;
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
          // snapShot is a property from firebase
          const { displayName, email, photoURL, userId } = snapShot.data();
          dispatchUser(displayName, email, photoURL, userId);
        }
      });
    }

    return () => {
      mounted = false;
    };
  }, [dispatch]);

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
        <CustomButton styleC={false} btnName="Sign In With Github" dis={true} />
      </div>
    ) : null;

  let githubActive =
    em !== "gmail.com" && user !== null ? (
      <div>
        <CustomButton styleC={true} btnName="Sign In With Google" dis={true} />
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
