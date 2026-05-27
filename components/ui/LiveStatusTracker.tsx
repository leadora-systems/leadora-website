"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function LiveStatusTracker() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const updateStatus = () => {
      // Get current UTC time
      const now = new Date();
      
      // Calculate IST time (UTC + 5:30)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);
      
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const day = istTime.getDay(); // 0 is Sunday, 6 is Saturday

      // Format current time in 12-hour format with AM/PM
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const ampm = hours >= 12 ? "PM" : "AM";
      const timeString = `${formattedHours}:${formattedMinutes} ${ampm} IST`;
      setTimeStr(timeString);

      // Business Hours: Monday to Friday, 10 AM (10) to 6 PM (18)
      const businessDay = day >= 1 && day <= 5;
      const businessHour = hours >= 10 && hours < 18;
      setIsOpen(businessDay && businessHour);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 30000); // update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-glass-border bg-glass p-5 shadow-xs font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-montserrat text-[14px] font-bold text-navy">
          <Clock className="h-4 w-4 text-blue" />
          <span>Team Availability Status</span>
        </div>
        <div className="flex items-center gap-1.5 font-sans">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? "bg-emerald-400" : "bg-orange-400"}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? "bg-emerald-500" : "bg-orange"}`}></span>
          </span>
          <span className={`text-[11px] font-extrabold tracking-wider ${isOpen ? "text-emerald-600" : "text-orange"}`}>
            {isOpen ? "ONLINE" : "OFFLINE"}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[12px] text-muted leading-relaxed">
        <div className="flex justify-between items-center bg-white/60 rounded-xl p-3 border border-glass-border">
          <span className="font-bold text-navy text-[11px] uppercase tracking-wider opacity-85">Current Office Time</span>
          <span className="font-montserrat font-extrabold text-blue text-[13px] tracking-wider">{timeStr || "Calculating..."}</span>
        </div>
            <p className="text-[11px] mt-0.5 leading-normal">
              {isOpen ? (
                <span className="text-emerald-600 font-medium">
                  ⚡ Our consulting engineers are active right now. Send a message to connect in 15–30 minutes!
                </span>
              ) : (
                <span>
                  🌙 Our engineers are offline (Working Hours: Mon-Fri, 10:00 AM - 6:00 PM IST). Send a message and we&apos;ll prioritize it first thing in the morning!
                </span>
              )}
            </p>
      </div>
    </div>
  );
}
