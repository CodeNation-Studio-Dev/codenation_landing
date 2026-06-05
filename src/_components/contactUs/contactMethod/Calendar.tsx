"use client";

import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import Cal, { getCalApi } from "@calcom/embed-react";
import Link from "next/link";

const Calendar = () => {
  useEffect(() => {
    const setCalendar = async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    };

    setCalendar();
  }, []);

  return (
    <div className="flex max-w-[1440px] flex-col items-center justify-center gap-4 lg:h-full lg:w-full lg:gap-2">
      <div className="flex w-full items-end justify-end text-lg">
        <Link
          href="/contact-method"
          className="top-10 left-20 flex cursor-pointer items-center gap-4"
        >
          {<IoArrowBack />} Go back
        </Link>
      </div>
      <Cal
        namespace="30min"
        calLink="francisco-luna/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
      />
    </div>
  );
};

export default Calendar;
