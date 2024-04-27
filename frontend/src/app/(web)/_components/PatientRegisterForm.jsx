"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

// zod config
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";

const PatientRegisterForm = () => {
  const router = useRouter();
  // ZOD Schema
  const RegisterPatientSchema = z.object({
    first_name: z.string().min(3, { message: "Name is required" }),
    last_name: z.string(),
    email: z.string().email(),
    phone_number: z.string(),
    password: z.string().min(8),
    confirm_password: z
      .string()
      .min(8)
      .refine((data) => data.password === data.confirm_password, {
        message: "Passwords don't match",
        path: ["confirm_password"],
      }),
  });

  const form = useForm({
    resolver: zodResolver(RegisterPatientSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      confirm_password: "",
    },
  });

  const registerPatient = async (data) => {
    console.log("DATA", data);

    const formData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      license_number: data.license_number,
      password: data.password,
      phone_number: data.phone_number.toString(),
    };

    const baseUrl = "http://127.0.0.1:5000/";

    try {
      const response = await axios.post(`${baseUrl}register/patient`, formData);

      toast({
        variant: "success",
        title: response.data.message,
      });

      router.push("/patient/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(registerPatient)}>
        <Card className="w-full max-w-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Patient Registration</CardTitle>
            <CardDescription>
              Enter your correct details below to register as a patient.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Firstname</FormLabel>
                    <FormControl>
                      <Input placeholder="firstname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lastname</FormLabel>
                    <FormControl>
                      <Input placeholder="lastname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="confirm pasword"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="w-full">
            <Button type="submit" className="w-full">
              Register
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default PatientRegisterForm;
