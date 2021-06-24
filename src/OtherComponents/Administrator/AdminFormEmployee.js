import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  inputStyle: {
    height: "6vh",
    width: "30vh",
    margin: "1vh",
    textAlign: "center",
    borderRadius: "1vh",
    border: "none",
  },
  inputSubmit: {
    height: "6vh",
    width: "15vh",
    margin: "1vh",
    textAlign: "center",
    borderRadius: "1vh",
    border: "none",
    cursor: 'pointer',
    '&:hover':{
        color: 'blue',
        fontSize: '2vh'
    }
  },
});
const AdminFormNewEmployee = ({
  image,
  editBoolean,
  handlerTitle,
  name,
  title,
  email,
  handlerName,
  handlerNewForm,
  handlerEditForm,
  handlerImage,
  handlerEmail
}) => {
  const classes = useStyles();

  return (
    <>
      {editBoolean ? <h3>Edit Employee</h3> : <h3>Add New Employee</h3>}

      <form onSubmit={editBoolean ? handlerEditForm : handlerNewForm}>
        <input
          className={classes.inputStyle}
          name="name"
          type="name"
          onChange={handlerName}
          value={name}
          placeholder="Enter Full Name"
          required
        />
        <input
          className={classes.inputStyle}
          name="name"
          type="text"
          onChange={handlerTitle}
          value={title}
          placeholder="Enter Job Title"
          required
        />
        <input
          className={classes.inputStyle}
          name="email"
          type="email"
          onChange={handlerEmail}
          value={email}
          placeholder="Enter Email"
          required
        />
        <input
          className={classes.inputStyle}
          type="text"
          value={image}
          onChange={handlerImage}
          placeholder="Enter url image path"
        />
   
         <input  type="submit" className={classes.inputSubmit}  />   
       

        
      </form>
    </>
  );
};
export default AdminFormNewEmployee;
