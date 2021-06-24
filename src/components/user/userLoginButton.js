import React, { useEffect } from "react";
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
    
      const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
        if (!userAuth) return;
        const userRef = firestore.doc(`learnabiUsers/${userAuth.uid}`);
        // console.log(userAuth);
        const snapShot = await userRef.get(); //snapShot from cloud firestore

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
          const { displayName, email, photoURL, userId } = snapShot.data();
          dispatchUser(displayName, email, photoURL, userId);
        }
      });
    return unsubscribe;
    
    
  }, [dispatch]);

  // reverse substring
  let em = email ? email.substring(email.lastIndexOf("@") + 1) : "";

  let btns =
    user === null ? (
      <div id="sign-in-div">
        <h4>Sign in: </h4>
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
