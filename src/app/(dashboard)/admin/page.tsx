import React from "react";

import UserCards from "../../../components/userCards";
import CountChart from "@/components/CountChart";
import AttendendanceChart from "@/components/AttendendanceChart";
import FinanceChart from "@/components/FinanceChart";
import EventCalendar from "@/components/EventCalendar";
import Announcement from "@/components/Announcement";

const AdminPage = () => {
  return (
    <div className=" flex justify-between p-1 gap-4 flex-col md:flex-row">
      {/* CENTER SIDE */}
      <div className="w-full lg:w-2/3 flex flex-col gap-2  ">
        <div className="flex  gap-4 justify-between flex-wrap">
          <UserCards
            types="Students"
            total_number="6,123"
            session="2025/2026"
          />
          <UserCards
            types="Teachers"
            total_number="1,123"
            session="2025/2026"
          />
          <UserCards types="Parents" total_number="1,123" session="2025/2026" />
          <UserCards types="Staffs" total_number="1,123" session="2025/2026" />
        </div>
        {/* MIDDLE CHARTS SIDE */}

        <div className="flex flex-col lg:flex-row gap-4 justify-between py-2 mt-5 space-y-2 lg:space-y-0 ">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[350px]">
            <CountChart />
          </div>

           {/* ATTENDANT CHART */}
           <div className="w-full lg:w-2/3 h-[350px]">
           
           <AttendendanceChart />

           </div>
        </div>

      {/* BUTTON CHARTS SIDE */}
      <div className="flex gap-2 justify-between py-2 mt-5"></div>
        <FinanceChart />

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/3  h-screen flex flex-col gap-8">
        <EventCalendar />

        <Announcement />
      </div>
    </div>
  );
};

export default AdminPage;
