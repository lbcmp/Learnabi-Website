import React from 'react';
import UserLoginButton from './userLoginButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';




const UserProfile = () => {


    return(
        <React.Fragment>

        <Card>
        <CardMedia
        // className={classes.cover}
        image=''
        title="Live from space album cover"
      />
    
        </Card>
        <UserLoginButton />


        </React.Fragment>
    )
}
export default UserProfile;