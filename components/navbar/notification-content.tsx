"use client";

import React from 'react'
import { PopoverContent } from '../ui/popover'
import { Separator } from '../ui/separator'
import { Calendar } from '../ui/calendar'
import { IoNotificationsOutline } from 'react-icons/io5';


const Notification = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <PopoverContent className='w-auto flex items-center space-x-4 ring-1 ring-zinc-700 bg-zinc-800'>

            <div>
                <IoNotificationsOutline className='w-40 h-40 text-zinc-500' />
            </div>
            <Separator orientation='vertical' />
            <div>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border text-zinc-200"
                />
            </div>
        </PopoverContent>
    )
}

export default Notification