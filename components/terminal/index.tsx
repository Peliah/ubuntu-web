"use client";

import { useState, useRef } from "react";
import { IoClose, IoSquareOutline, IoExpand } from "react-icons/io5";

interface TerminalProps {
    onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const terminalRef = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [command, setCommand] = useState<string>("");
    const [output, setOutput] = useState<string[]>([]);

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommand(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            executeCommand(command);
            setCommand("");
        }
    };

    const executeCommand = (cmd: string) => {
        let response = "";

        switch (cmd.trim().toLowerCase()) {
            case "help":
                response = "Available commands: help, clear, hello";
                break;
            case "hello":
                response = "Hello, User!";
                break;
            case "clear":
                setOutput([]);
                return;
            default:
                response = `Command not found: ${cmd}`;
        }

        setOutput((prevOutput) => [...prevOutput, `$ ${cmd}`, response]);
    };

    return (
        <div
            ref={terminalRef}
            className={`fixed transition-all bg-gray-900 text-green-400 border border-gray-700 shadow-lg ${isMaximized ? "top-0 left-0 w-full h-full" : "w-96 h-96"
                }`}
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
                    <button className="text-white">
                        <IoSquareOutline />
                    </button>
                    <button className="text-white" onClick={handleMaximize}>
                        <IoExpand />
                    </button>
                    <button className="text-white" onClick={onClose}>
                        <IoClose />
                    </button>
                </div>
            </div>
            <div className="p-4 overflow-auto h-full">
                <div className="overflow-auto h-full">
                    {output.map((line, index) => (
                        <pre key={index} className="whitespace-pre-wrap">
                            {line}
                        </pre>
                    ))}
                    <span>$ </span>
                    <input
                        type="text"
                        value={command}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        className="bg-transparent border-none outline-none text-green-400 w-full"
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
