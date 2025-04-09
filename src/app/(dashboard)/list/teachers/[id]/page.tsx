import React from "react";
import Image from "next/image";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4  bg-white  ">
      {/* LEFT SIDE */}
      <div className="w-full xl:w-2/3">
        {/* TOP  TEACHER INFO CARD and Shorcut Wrapper */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* TEACHER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4 items-center">
            {/* teacher profile picture */}
            <div className="w-1/3 flex justify-center items-center">
             
                <Image
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  width={120}
                  height={120}
                  alt=" "
                  className="rounded-full w-28 h-28   object-cover"
                />
             
            </div>
            {/* teacher info */}
            <div className="flex flex-col gap-4 w-2/3 justify-between">
              <h1 className="font-semibold text-lg ">Dean Guerrero</h1>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="flex justify-between items-center flex-wrap text-xs font-medium gap-2">
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
                  <span>January 15 2025</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center">
                  <Image
                    src="/mail.png"
                    width={14}
                    height={14}
                    alt=""
                    className=""
                  />
                  <span>user@gmail.com</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center">
                  <Image
                    src="/phone.png"
                    width={14}
                    height={14}
                    alt=""
                    className=""
                  />
                  <span>+234 091 6574 563</span>
                </div>
              </div>
            </div>
          </div>

          {/* TEACHER SHORTCUT */}
          <div className="flex-1 flex justify-between gap-4 flex-wrap ">
            
          </div>

          {/* Button */}
        </div>

        <div>Schedules</div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full xl:w-1/3">RIGHT</div>
    </div>
  );
};

export default SingleTeacherPage;
