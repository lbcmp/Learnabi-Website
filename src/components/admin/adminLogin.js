import React, { useEffect, useState } from "react";
import { firestore, auth, signIn } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  adminLogOut,
  adminState,
  selectAdminEmail,
} from "../../redux/admin/adminSlice";
import { selectName } from "../../redux/user/userSlice";
import Form from "./form";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginBoolean, setLoginBoolean] = useState(false);
  const [adminBoolean, setAdminBoolean] = useState(true);
  const adminEmail = useSelector(selectAdminEmail);
  const userLogin = useSelector(selectName);

  useEffect(() => {
    if (loginBoolean && userLogin === null) {
      signIn(email, password);
      setLoginBoolean(false);
    }

    if (userLogin === null) {
      function dispatchAdmin(adminEmail) {
        dispatch(
          adminState({
            email: adminEmail,
          })
        );
      }

      const unsubscribe = auth.onAuthStateChanged(async (adminAuth) => {
        if (!adminAuth) return;
        // console.log(adminAuth.email);
        if (adminAuth.email === 'admin@learnabi.com') {
          const userRef = firestore.doc(`learnabiUsers/admin:${adminAuth.uid}`); // path to the database

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
        }
      });
      return unsubscribe;
    }
  }, [dispatch, loginBoolean, email, password, userLogin, adminBoolean]);

  const authEmailPassword = (event) => {
    event.preventDefault();
    const p = password.length;
    if (userLogin === null) {
      (p < 8 && p !== 0) || (p > 8 && p !== 0) ? (
        <div>
          {" "}
          {alert("Password does not match the password's length")}{" "}
          {setPassword("")}{" "}
        </div>
      ) : (
        <div>
          {userLogin === null ? <div>{setLoginBoolean(true)}</div> : null}
        </div>
      );
      <div>{email.length < 2 ? alert("Email is invalid") : email}</div>;
    } else {
      alert("Please Log out from the user Account");
    }
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
    setAdminBoolean(false);
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
