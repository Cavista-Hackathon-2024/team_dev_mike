import DashboardAnalyticsCard from "./DashboardAnalyticsCard";
import DashboardTable from "./DashboardTable";
import DashboardWelcomeCard from "./DashboardWelcomeCard";

const DoctorDashboardLandingPage = () => {
  return (
    <>
      <DashboardWelcomeCard />
      <div className="grid grid-cols-2 gap-6 my-6">
        <DashboardAnalyticsCard
          title="prescriptions"
          num="207"
          percentage="25"
        />
        <DashboardAnalyticsCard title="patients" num="425" percentage="32" />
      </div>

      <div>
        <DashboardTable />
      </div>
    </>
  );
};

export default DoctorDashboardLandingPage;
