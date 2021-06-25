import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  googleButton: {
    fontSize:"1.75rem",
    background:"none",
    border:"none",
    boxShadow:"none",
    "&:hover": {
      color:"#DD70EA",
      background:"none",
      border:"none",
      boxShadow:"none",
    },
    // backgroundColor: "blue",
    // color: "white",
    // width: "24vh",
    // margin: "1vh",
    // fontSize: "1.5vh",
    // "&:hover": {
    //   backgroundColor: "blue",
    //   fontSize: "1.6vh",
    // },
  },

  githubButton: {
    fontSize:"1.75rem",
    background:"none",
    border:"none",
    boxShadow:"none",
    "&:hover": {
      color:"#DD70EA",
      background:"none",
      border:"none",
      boxShadow:"none",
    },
    // backgroundColor: "black",
    // color: "white",
    // width: "24vh",
    // margin: "1vh",
    // fontSize: "1.5vh",
    // "&:hover": {
    //   backgroundColor: "black",
    //   fontSize: "1.6vh",
    // },
  },
}));

const CustomButton = ({ btnName, styleC, clicked}) => {
  // styleC: true = google
  const classes = useStyles();
  return (
    <div style={{width:"40px", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Button
        variant="contained"
        onClick={clicked}
        className={styleC ? classes.googleButton : classes.githubButton}
      >
        <i className={styleC ? "fa fa-google" : "fa fa-github"}></i>
        {/* {btnName} */}
      </Button>
    </div>
  );
};
export default CustomButton;
