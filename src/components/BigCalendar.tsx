"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  //   console.log(calendarEvents);
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      //   defaultDate={new Date()}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
        onView={setView}
      view={view}
      defaultView={Views.WORK_WEEK}
      min={new Date(2024, 3, 1, 8, 0, 0)}
      max={new Date(2024, 3, 1, 18, 0, 0)}
      style={{ height: 700 }}
    />
  );
};

export default BigCalendar;
