import React from "react";
import { LoginForm } from "../_components/DoctorLoginForm";
import LoginImage from "../../../../public/assets/login.jpg";
import Image from "next/image";
import { CustomLoginTab } from "../_components/CustomLoginTab";

const Page = () => {
  return (
    <section className="flex h-[calc(100vh-65px)] items-center justify-center max-w-6xl mx-auto bg-gray-100">
      <CustomLoginTab />
    </section>
  );
};

export default Page;
