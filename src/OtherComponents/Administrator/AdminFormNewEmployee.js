import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    inputStyle: {
        height: "6vh",
          width: '30vh',
          margin: "1vh",
          textAlign: "center",
          borderRadius: "1vh",
          border: "none",
    },
    inputSubmit:{
        height: "6vh",
          width: '15vh',
          margin: "1vh",
          textAlign: "center",
          borderRadius: "1vh",
          border: "none",
    }
});
const AdminFormNewEmployee = ({photo, handlerTitle, name, title, handlerName }) => {
    const classes = useStyles();

    return(
        <>
        <div>

        </div>
        <form>
            <input className={classes.inputStyle}
            name='name'
            onChange={handlerName}
            value={name}
            placeholder='Enter Full Name'
            required

        />
         <input className={classes.inputStyle}
            name='name'
            onChange={handlerTitle}
            value={title}
            placeholder='Enter Job Title'
            required

        />
         <input className={classes.inputStyle}
            name='name'
            onChange={handlerName}
            value={name}
            placeholder='photo or n/a'
            required

        />
        <input type='submit' className={classes.inputSubmit}/>
        </form>
        </>
    )
}
export default AdminFormNewEmployee;