import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DoctorLoginForm } from "./DoctorLoginForm";
import PatientLoginForm from "./PatientLoginForm";

export function CustomLoginTab() {
  return (
    <Tabs defaultValue="doctor" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="doctor">Doctor</TabsTrigger>
        <TabsTrigger value="patient">Patient</TabsTrigger>
      </TabsList>
      <TabsContent value="doctor">
        <DoctorLoginForm />
      </TabsContent>
      <TabsContent value="patient">
        <PatientLoginForm />
      </TabsContent>
    </Tabs>
  );
}
