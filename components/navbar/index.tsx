"use client";
import { useEffect, useState } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { IoNotificationsOffOutline } from "react-icons/io5";

const Navbar = () => {
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
        // Initial call
        updateDateTime();
        const intervalId = setInterval(updateDateTime, 60000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <header className="absolute top-0 w-full bg-zinc-950">
            <nav className="flex items-center justify-between px-2 relative py-3">
                {/* start of the nav */}
                <div className="flex-none px-4 font-bold bg-slate-300 py-1 rounded-md"></div>

                {/* mid of the nav bar */}
                <div className="absolute left-1/2 transform -translate-x-1/2 text-gray-300">
                    <Popover>
                        <PopoverTrigger className="flex items-center">
                            <span className="text-sm font-medium">{formatDateTime(time)}</span>
                            <span><IoNotificationsOffOutline className="ml-4" /></span>
                        </PopoverTrigger>
                        <PopoverContent>Place content for the popover here.</PopoverContent>
                    </Popover>
                </div>

                {/* end of the navbar */}
                <ul className="flex-none flex space-x-4">

                </ul>
            </nav>
        </header>


    )
}

export default Navbar