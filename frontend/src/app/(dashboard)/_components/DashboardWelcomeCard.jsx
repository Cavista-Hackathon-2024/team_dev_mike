import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashboardWelcomeCard = () => {
  return (
    <Card className="sm:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle className="font-semibold">
          Welcome Back,{" "}
          <span className="text-teal-700 font-extrabold">Dr. Ben</span>
        </CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Introducing Our Streamlined Prescription Management System for
          Effortless Handling and Insightful Analysis.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>Prescribe a medication</Button>
      </CardFooter>
    </Card>
  );
};

export default DashboardWelcomeCard;
