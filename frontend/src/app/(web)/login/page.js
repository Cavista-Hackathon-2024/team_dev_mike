import React from "react";
import { LoginForm } from "../_components/LoginForm";
import LoginImage from "../../../../public/assets/login.jpg";
import Image from "next/image";

const Page = () => {
  return (
    <section className="flex h-[calc(100vh-65px)] items-center justify-center max-w-6xl mx-auto">
      <LoginForm />
    </section>
  );
};

export default Page;
