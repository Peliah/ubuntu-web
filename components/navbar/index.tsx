"use client";
import { useEffect, useState } from "react"
import {
    Popover,
    PopoverTrigger,
} from "@/components/ui/popover"
import { IoBatteryChargingOutline, IoNotificationsOffOutline, IoVolumeMediumOutline, IoWifiOutline } from "react-icons/io5";
import Notification from "./notification-content";
import UtilsBox from "./utils-box";

const Navbar = ({ onShrinkMain }: { onShrinkMain: () => void }) => {
    const [time, setTime] = useState<Date>(new Date());


    // function to set get the format of the date and time
    const formatDateTime = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        };
        return date.toLocaleDateString("en-US", options).replace(",", "");
    };

    //update the time and date every minute
    useEffect(() => {
        const updateDateTime = () => {
            setTime(new Date());
        };
        updateDateTime();
        const intervalId = setInterval(updateDateTime, 60000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <header className="absolute top-0 w-full bg-zinc-950 text-gray-300">
            <nav className="flex items-center justify-between px-2 relative py-1">
                <div className="p-2 rounded-xl hover:bg-zinc-700" onClick={onShrinkMain}>
                    <div className="flex-none px-4 font-bold bg-slate-300 py-1 rounded-md"></div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 ">
                    <Popover>
                        <PopoverTrigger className="flex items-center">
                            <span className="text-sm font-medium  rounded-xl hover:bg-zinc-700 px-4 py-1">
                                {formatDateTime(time)}
                            </span>
                            <span><IoNotificationsOffOutline className="ml-1" /></span>
                        </PopoverTrigger>
                        <Notification />
                    </Popover>
                </div>

                <ul className="flex-none flex space-x-4">
                    <li className=" ">
                        <Popover>
                            <PopoverTrigger className="flex items-center text-xl text-slate-50 space-x-3  rounded-xl hover:bg-zinc-700 px-4 py-1 ">
                                <IoWifiOutline />
                                <IoVolumeMediumOutline />
                                <IoBatteryChargingOutline />
                            </PopoverTrigger>
                            <UtilsBox />
                        </Popover>
                    </li>
                </ul>
            </nav>
        </header>


    )
}

export default Navbar