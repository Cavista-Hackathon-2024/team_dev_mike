import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DoctorLoginForm } from "./DoctorLoginForm";
import DoctorRegisterForm from "./DoctorRegisterForm";
import PatientRegisterForm from "./PatientRegisterForm";

export function CustomRegisterTab() {
  return (
    <Tabs defaultValue="doctor" className="max-w-xl mt-8">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="doctor">Doctor</TabsTrigger>
        <TabsTrigger value="patient">Patient</TabsTrigger>
      </TabsList>
      <TabsContent value="doctor" className="w-full">
        <DoctorRegisterForm />
      </TabsContent>
      <TabsContent value="patient">
        <PatientRegisterForm />
      </TabsContent>
    </Tabs>
  );
}
