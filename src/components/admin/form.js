import React from "react";
import { selectAdminEmail } from "../../redux/admin/adminSlice";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

const Form = ({
  handlerPassword,
  handlerEmail,
  email,
  password,
  handlerAuth,
  signOut,
}) => {
  const adminEmail = useSelector(selectAdminEmail);

  return (
    <form >
      <input
        style={{
          height: "6vh",
          width: '30vh',
          margin: "1vh",
          textAlign: "center",
          borderRadius: "1vh",
          border: "none",
        }}
        type="email"
        name="email"
        placeholder="Enter Admin Email"
        onChange={handlerEmail}
        value={email}
        disabled={adminEmail ? true : false}
        
      />
      <input
        style={{
          height: "6vh",
          width: '30vh',
          margin: "1vh",
          textAlign: "center",
          borderRadius: "1vh",
          border: "none",
        }}
        type="password"
        name="password"
        placeholder="Enter Admin Password"
        onChange={handlerPassword}
        value={password}
        
        disabled={adminEmail ? true : false}
        
      />
      {!adminEmail ? (
        <Button type='submit' style={{ border: "1px black solid" }} onClick={handlerAuth}>
          {" "}
          <p>Sign In</p>
        </Button>
      ) : (
        <Button type='submit'
          style={{ border: "1px black solid", color: "red" }}
          onClick={signOut}
        >
          Sign Out
        </Button>
      )}
    </form>
  );
};
export default Form;
