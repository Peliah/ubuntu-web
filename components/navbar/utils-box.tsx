"use client";

import { IoBatteryCharging, IoCameraOutline, IoPowerOutline, IoSettingsOutline, IoSunnyOutline, IoVolumeMedium } from 'react-icons/io5';
import { PopoverContent } from '../ui/popover';
import { Slider } from '../ui/slider';

const UtilsBox = () => {
    return (
        <PopoverContent className='w-96 flex flex-col space-y-4 p-4 ring-1 ring-slate-700 rounded-lg shadow-lg bg-zinc-800 text-slate-200'>
            {/* Battery and icons section */}
            <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-2 bg-zinc-700 rounded-full p-2'>
                    <IoBatteryCharging className=' text-2xl ' />
                    <span className='font-medium text-sm'>97%</span>
                </div>
                <div className='flex space-x-4'>
                    <span className='cursor-pointer bg-zinc-700 rounded-full p-2'>
                        <IoCameraOutline className=' text-base ' />
                    </span>
                    <span className='cursor-pointer bg-zinc-700 rounded-full p-2'>
                        <IoSettingsOutline className=' text-base ' />
                    </span>
                    <span className='cursor-pointer bg-zinc-700 rounded-full p-2'>
                        <IoPowerOutline className=' text-base ' />
                    </span>
                </div>
            </div>

            {/* Volume and brightness sliders section */}
            <div className='flex flex-col space-y-4'>
                <div className='flex items-center space-x-2'>
                    <IoVolumeMedium className='text-xl' />
                    <Slider defaultValue={[70]} max={100} step={1} className='flex-grow bg-zinc-700 rounded-full ' />
                </div>
                <div className='flex items-center space-x-2'>
                    <IoSunnyOutline className='text-xl' />
                    <Slider defaultValue={[33]} max={100} step={1} className='flex-grow bg-zinc-700 rounded-full ' />
                </div>
            </div>

            {/* Additional content section */}
            <div className='flex justify-between'>
                <span className='text-sm'>More Settings</span>
                <span className='text-sm cursor-pointer'>View All</span>
            </div>
        </PopoverContent>

    )
}

export default UtilsBox