import React, { useEffect, useState } from "react";
import "./admin.css";
import AdminLogin from "../../components/admin/adminLogin";
import AdminTeamCard from "./AdminTeamCard";
import pic from "../../Images/cofounders.png";
import { selectAdminEmail } from "../../redux/admin/adminSlice";
import { useSelector } from "react-redux";
import AdminFormNewEmployee from "./AdminFormEmployee";
import { newEmployeeSubmitHandler } from "./AdminHandlers";
import { firestore } from "../../components/firebase/firebase";

const AdminTeam = () => {
  const adminEmail = useSelector(selectAdminEmail);
  const [editBoolean, setEditBoolean] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [adminEmployeeData, setAdminEmployeeData] = useState([]);

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
  const onHandlerEditForm = () => {
    
  };
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
              handlerEditForm={onHandlerEditForm}
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
          <div>
            {adminEmployeeData.map((item) => (
              <AdminTeamCard
                key={item.EmployeeId}
                photo={item.Image}
                name={item.Name}
                title={item.Tittle}
                clickedHandlerEditCard={() =>
                  onHandlerEditForm(
                    item.Image,
                    item.Name,
                    item.Title
                  )
                }
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AdminTeam;
