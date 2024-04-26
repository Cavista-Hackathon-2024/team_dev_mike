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

export function DoctorLoginForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Doctor's Login</CardTitle>
        <CardDescription>
          Enter your ID below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="id">Doctor's ID</Label>
          <Input id="id" type="text" placeholder="DOC-6782867" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-teal-600 hover:bg-teal-700">Sign in</Button>
      </CardFooter>
    </Card>
  );
}
