"use client";

import { useState, useRef, useEffect } from "react";
import { IoExpand, IoClose, IoSquareOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineFolder, AiOutlineDownload, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineAudio, AiOutlineClockCircle, AiOutlineDelete, AiOutlinePicture, AiOutlineStar, AiOutlineVideoCamera } from "react-icons/ai";

interface FolderProps {
    onClose: () => void;
}


const FileExplorer: React.FC<FolderProps> = ({ onClose }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const folderRef = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 30 });
    const [isOpen, setIsOpen] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState<string[]>(["Home"]);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const handleDragStart = (e: React.MouseEvent) => {
        const initialX = e.clientX - position.x;
        const initialY = e.clientY - position.y;

        const handleDrag = (e: MouseEvent) => {
            setPosition({ x: e.clientX - initialX, y: e.clientY - initialY });
        };

        const handleDragEnd = () => {
            window.removeEventListener("mousemove", handleDrag);
            window.removeEventListener("mouseup", handleDragEnd);
        };

        window.addEventListener("mousemove", handleDrag);
        window.addEventListener("mouseup", handleDragEnd);
    };

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    const navigateToFolder = (folderName: string) => {
        setBreadcrumb((prevBreadcrumb) => [...prevBreadcrumb, folderName]);
    };

    const navigateToBreadcrumb = (index: number) => {
        setBreadcrumb((prevBreadcrumb) => prevBreadcrumb.slice(0, index + 1));
    };

    return (
        <div
            ref={folderRef}
            className={`fixed transition-all bg-zinc-900 text-zinc-200 border border-zinc-700 shadow-lg w-full h-full ${isMaximized ? "top-0 left-0 w-full h-full" : "w-4/6 h-4/6"} ${isOpen ? "animate-slideUp" : ""}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                borderRadius: "8px",
            }}
        >
            <div
                className="flex justify-between items-center p-2 cursor-move"
                onMouseDown={handleDragStart}
                style={{ backgroundColor: "#222" }}
            >
                <div className="font-bold"></div>
                <div className="flex space-x-2">
                    <button className="text-white" onClick={handleMaximize}>
                        <IoExpand />
                    </button>
                    <button className="text-white">
                        <IoSquareOutline />
                    </button>
                    <button className="text-white" onClick={onClose}>
                        <IoClose />
                    </button>
                </div>
            </div>

            <main className="flex h-full rounded-lg overflow-hidden bg-zinc-900">
                <aside className="w-56 bg-zinc-800 text-white p-4 space-y-3">
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2 hover:bg-zinc-700 p-2 rounded-md cursor-pointer">
                            <AiOutlineStar size={20} />
                            <span>Starred</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:bg-zinc-700 p-2 rounded-md cursor-pointer">
                            <AiOutlineClockCircle size={20} />
                            <span>Recent</span>
                        </div>
                    </div>

                    <hr className="border-zinc-700 my-2" />

                    <div className="space-y-2">
                        <div className="flex items-center space-x-2 hover:bg-zinc-700 p-2 rounded-md cursor-pointer">
                            <AiOutlineHome size={20} />
                            <span>Home</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:bg-zinc-700 p-2 rounded-md cursor-pointer">
                            <AiOutlineFolder size={20} />
                            <span>Documents</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:bg-zinc-700 p-2 rounded-md cursor-pointer">
                            <AiOutlineDownload size={20} />
                            <span>Downloads</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:bg-zinc-700 p-2 rounded-md cursor-pointer">
                            <AiOutlineAudio size={20} />
                            <span>Music</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:bg-zinc-700 p-2 rounded-md cursor-pointer">
                            <AiOutlinePicture size={20} />
                            <span>Pictures</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:bg-zinc-700 p-2 rounded-md cursor-pointer">
                            <AiOutlineVideoCamera size={20} />
                            <span>Videos</span>
                        </div>
                    </div>

                    <hr className="border-zinc-700 my-2" />

                    <div className="flex items-center space-x-2 hover:bg-zinc-700 p-2 rounded-md cursor-pointer">
                        <AiOutlineDelete size={20} />
                        <span>Trash</span>
                    </div>
                </aside>

                <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between  p-2">
                        <div className="flex items-center space-x-2">
                            <button className="p-1 hover:bg-zinc-300 rounded-full"><AiOutlineArrowLeft /></button>
                            <button className="p-1 hover:bg-zinc-300 rounded-full"><AiOutlineArrowRight /></button>
                            <div className="flex space-x-1 text-sm">
                                {breadcrumb.map((crumb, index) => (
                                    <span
                                        key={index}
                                        className="text-zinc-600 cursor-pointer hover:underline"
                                        onClick={() => navigateToBreadcrumb(index)}
                                    >
                                        {crumb} {index < breadcrumb.length - 1 && "/"}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-4 grid grid-cols-10 gap-4">
                        {["Folder 1", "Folder 2", "Folder 3"].map((folder, index) => (
                            <div
                                key={index}
                                className=" p-2 text-center cursor-pointer rounded-lg hover:bg-zinc-600"
                                onClick={() => navigateToFolder(folder)}
                            >
                                <AiOutlineFolder size={54} className="mx-auto text-zinc-600" />
                                <span>{folder}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <style jsx>{`
                @keyframes slideUp {
                from {
                    transform: translateY(100%);
                }
                to {
                    transform: translateY(0);
                }
                }

                .animate-slideUp {
                animation: slideUp 0.2s ease-out;
                }
            `}</style>
        </div>
    )
}

export default FileExplorer