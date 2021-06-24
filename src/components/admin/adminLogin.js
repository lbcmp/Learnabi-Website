import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { firestore, auth, signIn } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { adminLogOut, adminState, selectAdminEmail } from "../../redux/admin/adminSlice";


const AdminLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginBoolean, setLoginBoolean] = useState(false);
  const adminEmail = useSelector(selectAdminEmail)

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

      const userRef = firestore.doc(`learnabiAdmin/${adminAuth.uid}`);
      //   console.log(userRef);

      const snapShot = await userRef.get(); //snapShot from could firestore
      // console.log(snapShot);
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

  const authEmailPassword = () => {
    setLoginBoolean(true);
  };

  const onChangeHandlerEmail = (event) => {
    let email = event.target.value;
    setEmail(email);
  };
  const onChangeHandlerPassword = (event) => {
    let pass = event.target.value;
    setPassword(pass);
  };
  const signOut = () => {
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
      <div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter the Admin Email"
            onChange={onChangeHandlerEmail}
            value={email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={onChangeHandlerPassword}
            value={password}
            required
          />
          <button onClick={authEmailPassword}>
            {" "}
            <p>Sign In</p>
          </button>
        </form>
        <button onClick={signOut}>Sign Out</button>
        {/* <button onClick={authEmailPassword(email, password)}>
          Admin Login
        </button> */}
      </div>
    </React.Fragment>
  );
};
export default AdminLogin;
