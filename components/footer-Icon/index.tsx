"use client";
import Image from "next/image";

interface IconProps {
    icon: {
        id: number;
        src: string;
        alt: string;
        name: string;
        isActive: boolean;
    };
}

const FootIcon: React.FC<IconProps> = ({ icon }) => {
    return (
        <div className="flex flex-col items-center relative hover:bg-zinc-600 hover:ring-1 rounded-full p-3 w-12 h-12">
            <div className="hoverable-button">
                <Image src={icon.src} alt={icon.alt} height={20} width={20} />
                {icon.isActive && (
                    <div className="mt-1">
                        <div className="bg-blue-600 p-[1px] rounded-full"></div>
                    </div>
                )}
            </div>
            <span className="display-on-hover absolute -top-6 text-sm text-white bg-gray-800 px-2 py-1 rounded opacity-0 transition-opacity duration-300 ease-in-out">
                {icon.name}
            </span>
            <style jsx>{`
                .hoverable-button:hover + .display-on-hover {
                    opacity: 1;
                }
                .display-on-hover {
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};

export default FootIcon;
