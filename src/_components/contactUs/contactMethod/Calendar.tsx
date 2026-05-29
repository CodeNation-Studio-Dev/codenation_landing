"use client";

import { SetStateAction, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import Cal, { getCalApi } from "@calcom/embed-react";

const Calendar = ({
  setBookCall,
}: {
  setBookCall: React.Dispatch<SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div className="flex max-w-[1440px] flex-col items-center justify-center gap-4 lg:h-full lg:w-full lg:gap-2">
      <div className="flex w-full items-end justify-end text-lg">
        <button
          className="top-10 left-20 flex cursor-pointer items-center gap-4"
          onClick={() => setBookCall(false)}
        >
          {<IoArrowBack />} Go back
        </button>
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
