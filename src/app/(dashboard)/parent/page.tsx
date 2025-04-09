import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import React from "react";

const ParentPage = () => {
  return (
    <div className="flex   p-4 gap-4 flex-col xl:flex-row flex-1">
      {/* CENTER */}
      <div className="w-full xl:w-2/3">
      <div className="flex bg-white flex-col p-2">
        <h1 className="font-semibold text-sm">Schedule {"(John Doe)"}</h1>
        <BigCalendar />

      

      </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full xl:w-1/3  h-screen flex flex-col gap-8">
        {/* <EventCalendar /> */}

        <Announcement />
      </div>
    </div>
  );
};

export default ParentPage;
