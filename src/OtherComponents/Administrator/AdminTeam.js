import React, { useEffect, useState } from "react";
import "./admin.css";
import AdminLogin from "../../components/admin/adminLogin";
import AdminTeamCard from "./AdminTeamCard";
import pic from "../../Images/cofounders.png";
import { selectAdminEmail,  } from "../../redux/admin/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import AdminFormNewEmployee from "./AdminFormEmployee";
import { deleteEmployeeHandler, newEmployeeSubmitHandler } from "./AdminHandlers";
import { firestore } from "../../components/firebase/firebase";
import {
  selectEmployeeName,
  selectEmployeeEmail,
  selectEmployeeImage,
  employeeState,
  selectEmployeeTitle
} from "../../redux/employee/employeeSlice.js";
import { updateEmployeeHandler } from "./AdminHandlers";

const AdminTeam = () => {
  const adminEmail = useSelector(selectAdminEmail);
  const [editBoolean, setEditBoolean] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [adminEmployeeData, setAdminEmployeeData] = useState([]);
  const dispatch = useDispatch();
  const employeeName = useSelector(selectEmployeeName);
  const employeeEmail = useSelector(selectEmployeeEmail);
  const employeeImage = useSelector(selectEmployeeImage);
  const employeeTitle = useSelector(selectEmployeeTitle);

  useEffect(() => {
    
    firestore
      .collection("learnabiEmployees")
      .get()
      .then((querySnapShot) => {
        const data = querySnapShot.docs.map((item) => item.data());
        setAdminEmployeeData(data);
      });
  }, []);

  const onHandlerNewForm = (e) => {
    e.preventDefault();
    newEmployeeSubmitHandler(email, name, title, image);
    reset();
  };

  const onHandlerImage = (event) => {
    setImage(event.target.value);
  };
  const onHandlerName = (event) => {
    setName(event.target.value);
  };
  const onHandlerTitle = (event) => {
    setTitle(event.target.value);
  };
  const onHandlerEmail = (event) => {
    setEmail(event.target.value);
  };
  const onHandlerEditForm = (employeeId, image, name, tittle ) => {
    // set boolean to true for use in AdminFormNewEmployee.js
    setEditBoolean(true);
    dispatch(employeeState({
      name: name,
      email: employeeId,
      image: image,
      title: tittle
    }))
    setName(employeeName);
    setImage(employeeImage);
    setTitle(employeeTitle);
    setEmail(employeeEmail);
    
  };
  const onHandlerEditNewForm = (e) =>{
    e.preventDefault();
    updateEmployeeHandler(email, name, title, image);
    reset();
  }
  const onHandlerDeleteCard = (path)=> {
    deleteEmployeeHandler(path);
  }
  
  const reset = () => {
    setEmail("");
    setTitle("");
    setName("");
    setImage("");
  };

  return (
    <div>
      <AdminLogin />
      {adminEmail ? (
        <>
          <div>
            {" "}
            <AdminFormNewEmployee
              editBoolean={editBoolean}
              handlerNewForm={onHandlerNewForm}
              handlerEditNewForm={onHandlerEditNewForm}
              image={image}
              title={title}
              name={name}
              email={email}
              handlerEmail={onHandlerEmail}
              handlerName={onHandlerName}
              handlerTitle={onHandlerTitle}
              handlerImage={onHandlerImage}
            />
          </div>
          <div style={{display: 'flex', flexFlow: 'wrap' }}>
            {adminEmployeeData.map((item) => (
              <AdminTeamCard
                key={item.EmployeeId}
                photo={item.Image}
                name={item.Name}
                title={item.Tittle}
                clickedHandlerEditCard={() =>
                  onHandlerEditForm(
                    item.EmployeeId,
                    item.Image,
                    item.Name,
                    item.Tittle,
                    
                  )
                  
                }
                clickedHandlerDeleteCard={() => onHandlerDeleteCard(item.EmployeeId)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AdminTeam;
