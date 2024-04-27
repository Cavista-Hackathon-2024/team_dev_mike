import React from "react";
import PatientWelcomeCard from "./PatientWelcomeCard";
import DashboardTable from "./DashboardTable";

const PatientDashboardLandingPage = () => {
  return (
    <>
      <PatientWelcomeCard />
      <div>
        <DashboardTable />
      </div>
    </>
  );
};

export default PatientDashboardLandingPage;
