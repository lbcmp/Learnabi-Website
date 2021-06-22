import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  googleButton: {
    backgroundColor: "blue",
    color: "white",
    width: "24vh",
    margin: "1vh",
    fontSize: "1.5vh",
    "&:hover": {
      backgroundColor: "blue",
      fontSize: "1.6vh",
    },
  },

  githubButton: {
    backgroundColor: "black",
    color: "white",
    width: "24vh",
    margin: "1vh",
    fontSize: "1.5vh",
    "&:hover": {
      backgroundColor: "black",
      fontSize: "1.6vh",
    },
  },
}));

const CustomButton = ({ btnName, styleC, clicked}) => {
  // styleC: true = google
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        onClick={clicked}
        className={styleC ? classes.googleButton : classes.githubButton}
      >
        {btnName}
      </Button>
    </div>
  );
};
export default CustomButton;
