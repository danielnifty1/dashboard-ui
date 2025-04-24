import React from "react";
import Image from "next/image";
import BigCalendar from "@/components/BigCalendar";
import Announcement from "@/components/Announcement";
import Link from "next/link";
import CountChart from "@/components/CountChart";
import Performance from "@/components/Perfomance";
import FormModal from "@/components/FormModal";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4   ">
      {/* LEFT SIDE */}
      <div className="w-full xl:w-2/3">
        {/* TOP  TEACHER INFO CARD and Shorcut Wrapper */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* TEACHER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4    rounded-md flex-1 flex gap-4 items-center   ">
            {/* teacher profile picture */}
            <div className="w-1/3 flex justify-center items-center">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                width={120}
                height={120}
                alt=" "
                className="rounded-full w-29 h-28   object-cover"
              />
            </div>
            {/* teacher info */}
            <div className="flex flex-col gap-4 w-2/3 justify-between">
              <div className="flex items-center gap-2">
                <h1 className="font-semibold text-lg ">Esther Morgan</h1>
                <FormModal
                  table="student"
                  type="update"
                  data={{
                    id: 10,
                    teacherId: "1234567890",
                    username: "girame",
                    bloodType: "A+",
                    name: "John Glover",

                    email: "john@glover.com",
                    photo:
                      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    phone: "1234567890",
                    subjects: ["Biology"],
                    classes: ["5A", "4B", "3C"],
                    address: "123 Main St, Anytown, USA",
                  }}
                />
              </div>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="flex justify-between items-center flex-wrap  text-xs font-medium gap-2">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center">
                  <Image
                    src="/blood.png"
                    width={14}
                    height={14}
                    alt=""
                    className=""
                  />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center">
                  <Image
                    src="/date.png"
                    width={14}
                    height={14}
                    alt=""
                    className=""
                  />
                  <span>January 2025</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center">
                  <Image
                    src="/mail.png"
                    width={14}
                    height={14}
                    alt=""
                    className=""
                  />
                  <span>student@gmail.com</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center">
                  <Image
                    src="/phone.png"
                    width={14}
                    height={14}
                    alt=""
                    className=""
                  />
                  <span>+1234567</span>
                </div>
              </div>
            </div>
          </div>

          {/* TEACHER SHORTCUT */}
          <div className=" flex-1 flex justify-between gap-4 flex-wrap  ">
            {/* CARDS */}
            <div className="bg-white p-4 rounded-md flex gap-4  w-full md:w-[48%] xl:w-[45%]  2xl:w-[48%] ">
              <Image
                width={20}
                height={20}
                src="/singleAttendance.png"
                alt=""
                className="w-6 h-6"
              />
              <div className="flex flex-col">
                <h1>90%</h1>
                <p className="text-xs text-gray-400">Attendance</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md flex gap-4  w-full md:w-[48%] xl:w-[45%]  2xl:w-[48%] ">
              <Image
                width={20}
                height={20}
                src="/singleAttendance.png"
                alt=""
                className="w-6 h-6"
              />
              <div className="flex flex-col">
                <h1>90%</h1>
                <p className="text-xs text-gray-400">Attendance</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md flex gap-4  w-full md:w-[48%] xl:w-[45%]  2xl:w-[48%] ">
              <Image
                width={20}
                height={20}
                src="/singleAttendance.png"
                alt=""
                className="w-6 h-6"
              />
              <div className="flex flex-col">
                <h1>90%</h1>
                <p className="text-xs text-gray-400">Attendance</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md flex gap-4  w-full md:w-[48%] xl:w-[45%]  2xl:w-[48%] ">
              <Image
                width={20}
                height={20}
                src="/singleAttendance.png"
                alt=""
                className="w-6 h-6"
              />
              <div className="flex flex-col">
                <h1>90%</h1>
                <p className="text-xs text-gray-400">Attendance</p>
              </div>
            </div>
          </div>

          {/* Button */}
        </div>

        <div className="mt-4 rounded-md p-4 h-[800px]">
          <h1 className="font-semibold text-lg">Student&apos;s schedule</h1>

          <BigCalendar />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full xl:w-1/3 gap-4 flex flex-col">
        <div className="bg-white  rounded-md p-4">
          <h1 className="text-lg font-semibold">Shortcuts</h1>
          <div className="flex flex-wrap gap-4 text-xs textgray-500 justify-start items-center">
            <Link href="" className="rounded-md p-3 bg-lamaSkyLight ">
              Student&apos;s Lessons
            </Link>
            <Link href="" className="rounded-md p-3 bg-lamaPurpleLight ">
              Student&apos;s Teachers
            </Link>
            <Link href="" className="rounded-md p-3 bg-lamaYellowLight ">
              Student&apos;s Results
            </Link>
            <Link href="" className="rounded-md p-3 bg-pink-50 ">
              Student&apos;s Exams
            </Link>
            <Link href="" className="rounded-md p-3 bg-lamaSkyLight ">
              Student&apos;s Assignments
            </Link>
          </div>
        </div>

        <Performance />

        <Announcement />
      </div>
    </div>
  );
};

export default SingleStudentPage;
