"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const PatientWelcomeCard = () => {
  return (
    <Card className="sm:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle className="font-semibold">
          Welcome Back,{" "}
          <span className="text-teal-700 font-extrabold">John</span>
        </CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Introducing Our Streamlined Prescription Management System for
          Effortless Handling and Insightful Analysis.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href="https://landbot.online/v3/H-2203684-UDMR1FPXM2D8TGP0/index.html">
          <Button>Ask AI</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PatientWelcomeCard;
