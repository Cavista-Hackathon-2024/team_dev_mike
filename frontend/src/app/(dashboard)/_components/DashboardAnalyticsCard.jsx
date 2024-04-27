import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DashboardAnalyticsCard = ({ title, num, percentage }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>All {title}</CardDescription>
        <CardTitle className="text-4xl text-teal-700">{num}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          +{percentage}% from last week
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardAnalyticsCard;
