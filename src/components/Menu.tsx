"use client"
const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["ADMIN", "TEACHER", "STUDENT", "PARENT"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["ADMIN", "TEACHER"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["ADMIN", "TEACHER"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["ADMIN", "TEACHER"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["ADMIN"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["ADMIN", "TEACHER"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["ADMIN", "TEACHER"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["ADMIN", "TEACHER", "STUDENT", "PARENT"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["ADMIN", "TEACHER", "STUDENT", "PARENT"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["ADMIN", "TEACHER", "STUDENT", "PARENT"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["ADMIN", "TEACHER", "STUDENT", "PARENT"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["ADMIN", "TEACHER", "STUDENT", "PARENT"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["ADMIN", "TEACHER", "STUDENT", "PARENT"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["ADMIN", "TEACHER", "STUDENT", "PARENT"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["ADMIN", "TEACHER", "STUDENT", "PARENT"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["ADMIN", "TEACHER", "STUDENT", "PARENT"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["ADMIN", "TEACHER", "STUDENT", "PARENT"],
      },
    ],
  },
];

import Link from "next/link";
// import { Link } from "react-router-dom";

import React from "react";
import Image from "next/image";
import { role } from "@/lib/data";
import { usePathname } from "next/navigation";
import {cn} from "../lib/utils"


const Menu = ({ 
   href, 
  children,
  className
}:{
    href: string,
    children: React.ReactNode,
    className?: string
  }) => {
    const pathName=usePathname()
    // const isActive=pathName===href|| pathName.startsWith(href)
    // console.log("this active status "+pathName)
  return (
    <div className="mt-4 text-sm h-screen mb-10 ">
      {menuItems.map((item) => (
        <div className="flex flex-col gap-1" key={item.title}>
          <span className="">{item.title}</span>

          {item.items.map((list) => {
            if (list.visible.includes(role.ADMIN)) {
              
    const isActive=pathName===list.href
    // console.log("this active status "+pathName+" and hfef is "+list.href)
              
              return (
                <Link
                  className={cn("flex justify-start lg:justify-start text-gray-500 items-start p-1 md:px-2 gap-1 ml-4 rounded-md hover:bg-lamaSkyLight hover:text-gray-600 transition-all duration-200 ease-in-out", isActive && "bg-lamaSkyLight text-gray-500 rounded-none px-0 w-full")}
                  href={list.href}
                  key={list.label}
               
                >
                  <Image
                    alt=""
                    className="w-[32px] lg:w-[15px] h-[32px] lg:h-[15px] "
                    width={0}
                    height={0}
                    src={list.icon}
                  />
                  <span className="hidden  lg:block text-gray-400">
                    {list.label}
                  </span>
                </Link>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
