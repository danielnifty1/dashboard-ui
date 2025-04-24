"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

import { z } from "zod";
import InputFields from "./InputFields";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "username must be at least 3 characters" })
    .max(20, { message: "username must be at most 20 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z
    .string()
    .min(11, { message: "Phone number must be at least 11 digits" })
    .max(11, { message: "Phone number must be at most 11 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  birthdate: z.date({ message: "Birth date is required" }),
  bloodType: z.string({ message: "Blood Type is required" }),

  sex: z.enum(["Male", "Female"], { message: "Select Gender" }),
  img: z.instanceof(File, { message: "Select Image" }),
});

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log("this is data " + data);
  });

  return (
    <form className="flex flex-col    " onSubmit={onSubmit}>
      <h1 className="font-semibold text-xl text-center">Create New Teacher</h1>

      <span className="text-xs text-gray-400 font-medium p-2">
        Authentication Information
      </span>

      <div className="flex flex-wrap justify-between gap-4 p-2">
        <InputFields
          label="Username"
          type="text"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />

        <InputFields
          label="Email"
          type="email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />

        <InputFields
          label="password"
          type="password"
          name="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
      </div>

      <span className="text-xs text-gray-400 font-medium p-2">
        Personal Information
      </span>
      <div className="flex flex-wrap justify-between gap-4 p-2">
        <InputFields
          label="firstName"
          
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />

        <InputFields
          label="lastName"
          type="text"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />

        <InputFields
          label="phone"
          type="number"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />

        <InputFields
          label="address"
          type="text"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />

        <InputFields
          label="birthdate"
          type="date"
          name="birthdate"
          defaultValue={data?.birthdate}
          register={register}
          error={errors.birthdate}
        />

        <InputFields
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />

  
      </div>

      <div className="flex flex-wrap justify-between w-full p-2">
        <div className="flex flex-col gap-2 w-full md:w-1/4 ">
          <label className="text-xs text-gray-400">Sex</label>
          <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full" 
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option>Male</option>
            <option>FeMale</option>

          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">{errors.sex.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4 ">
          <label className="text-xs text-gray-400" htmlFor="img">
            <Image src="/upload.png" alt="" height={28} width={28}  />
            <span>Upload a photo </span>
          </label>
         <input type="file" id="img"    {...register("img")} className="hidden"/>
          {errors.img?.message && (
            <p className="text-xs text-red-400">{errors.img.message}</p>
          )}
        </div>
      </div>

      <button className="bg-blue-600 text-white rounded-md p-2">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
