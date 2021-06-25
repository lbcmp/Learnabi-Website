import React from "react";
import UserLoginButton from "./userLoginButton";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
  selectName,
  selectEmail,
  selectPhoto,
  selectAccount,
} from "../../redux/user/userSlice";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "60vh",
    height: "10vh",
    marginTop: '1%'
  },
  content: {
    // border: '2px black solid',
    fontSize: '2.5vh',
    height: "10vh",
    width: '20vh',
    padding: "0",
    marginLeft: '1%'
  },
  logo: {
    display: "flex",
    width: "25vh",
    marginTop: '2%'
    // border: 'black 2px solid'
  },
  logout: {
    marginTop: "5%",
    color: "red",
    padding: "0",
    height: "auto",
  },
  login: {
    // border: 'black solid 2px',
    width: "100%",
    marginTop: "3%",
  },
  cover: {
    width: "20vh",
    height: "auto",
  },
}));

const UserProfile = () => {
  const classes = useStyles();

  const userName = useSelector(selectName);
  const userEmail = useSelector(selectEmail);
  const userPhoto = useSelector(selectPhoto);
  const userAccount = useSelector(selectAccount);


  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          component='img'
          src={userPhoto}
          
        />
        <div>
          <CardContent className={classes.content}>
            <Typography >
              {userName}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {userAccount}
            </Typography>
          </CardContent>
        </div>

        {userName ? (
          <div className={classes.logo}>
            {" "}
            <UserLoginButton />{" "}
            <div className={classes.logout}>{"Log Out"}</div>
          </div>
        ) : (
          <div className={classes.login}>
            <UserLoginButton />
          </div>
        )}
      </Card>
    </React.Fragment>
  );
};
export default UserProfile;
