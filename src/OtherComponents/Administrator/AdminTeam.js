import React from "react";
import "./admin.css";
import AdminLogin from "../../components/admin/adminLogin";
import AdminTeamCard from "./AdminTeamCard";
import pic from "../../Images/cofounders.png";
import { selectAdminEmail } from "../../redux/admin/adminSlice";
import { useSelector } from "react-redux";
import AdminFormNewEmployee from "./AdminFormNewEmployee";

const AdminTeam = () => {
  const adminEmail = useSelector(selectAdminEmail);

  return (
    <div>
      <AdminLogin />
      {adminEmail ? (
        <>
          <div>
            {" "}
            <AdminFormNewEmployee />
          </div>
          <div>
            <AdminTeamCard
              photo={pic}
              name={"Braulio calderon"}
              title={"Intern React Developer"}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AdminTeam;
