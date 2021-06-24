import React, { useEffect, useState } from "react";
import { firestore, auth, signIn } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  adminLogOut,
  adminState,
  selectAdminEmail,
} from "../../redux/admin/adminSlice";
import Form from "./form";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginBoolean, setLoginBoolean] = useState(false);
  const adminEmail = useSelector(selectAdminEmail);

  useEffect(() => {
    if (loginBoolean) {
      signIn(email, password);
      setLoginBoolean(false);
    }
    function dispatchAdmin(adminEmail) {
      dispatch(
        adminState({
          email: adminEmail,
        })
      );
    }

    const unsubscribe = auth.onAuthStateChanged(async (adminAuth) => {
      if (!adminAuth) return;
      const userRef = firestore.doc(`learnabiAdmin/${adminAuth.uid}`); // path to the database

      const snapShot = await userRef.get(); //snapShot from cloud firestore

      if (!snapShot.exists) {
        const { email } = adminAuth;
        const createdAt = new Date();
        try {
          await userRef.set({
            email,
            createdAt,
          });
          dispatchAdmin(email);
        } catch (error) {
          console.log(error.message);
        }
      } else {
        const { email } = snapShot.data();
        dispatchAdmin(email);
        setPassword("");
        setEmail("");
      }
    });
    return unsubscribe;
  }, [dispatch, loginBoolean, email, password]);

  const authEmailPassword = (event) => {
    event.preventDefault();
    const p = password.length;
    (p < 8 && p !== 0) || (p > 8 && p !== 0)
      ? <div> {alert("Password does not match the password's length")} {setPassword('')} </div>
      : setLoginBoolean(true);
    <div>{email.length < 2 ? alert("Email is invalid") : email}</div>;
  };

  const onChangeHandlerEmail = (event) => {
    let email = event.target.value;
    setEmail(email);
  };

  const onChangeHandlerPassword = (event) => {
    let pass = event.target.value;
    setPassword(pass);
  };

  const handlerSignOut = () => {
    auth.signOut();
    dispatch(adminLogOut());
    reset();
  };

  const reset = () => {
    setPassword("");
    setEmail("");
    setLoginBoolean(false);
  };

  return (
    <React.Fragment>
      <div
        style={{
          height: "5vh",
          textAlign: "center",
          fontSize: "3vh",
          margin: "2vh",
        }}
      >
        {adminEmail ? `Login: ${adminEmail}` : null}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form
          handlerPassword={onChangeHandlerPassword}
          handlerEmail={onChangeHandlerEmail}
          email={email}
          password={password}
          handlerAuth={authEmailPassword}
          signOut={handlerSignOut}
        />
      </div>
    </React.Fragment>
  );
};
export default AdminLogin;
