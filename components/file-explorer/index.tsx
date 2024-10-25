"use client";

import { useState, useRef, useEffect } from "react";
import { IoExpand, IoClose, IoSquareOutline } from "react-icons/io5";

interface FolderProps {
    onClose: () => void;
}


const FileExplorer: React.FC<FolderProps> = ({ onClose }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const folderRef = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 30 });
    const [isOpen, setIsOpen] = useState(false);

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


    return (
        <div
            ref={folderRef}
            className={`fixed transition-all bg-gray-900 text-green-400 border border-gray-700 shadow-lg w-full h-full ${isMaximized ? "top-0 left-0 w-full h-full" : "w-4/6 h-4/6"} ${isOpen ? "animate-slideUp" : ""}`}
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

            <main className="p-4 overflow-auto h-full">

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