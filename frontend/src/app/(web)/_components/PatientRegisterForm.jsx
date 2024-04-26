import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PatientRegisterForm = () => {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Register Patient</CardTitle>
        <CardDescription>
          Enter your correct details below to register as a doctor.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              type="text"
              placeholder="firstname"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" type="text" placeholder="lastname" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" type="text" placeholder="phone number" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <Input id="confirm_password" type="password" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-teal-600 hover:bg-teal-700">Sign in</Button>
      </CardFooter>
    </Card>
  );
};

export default PatientRegisterForm;
