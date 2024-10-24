// // components/Terminal.tsx
"use client";
// import { useState, useEffect, useRef } from 'react';
// import { IoClose, IoArrowDownCircle, IoArrowUpCircle } from 'react-icons/io5'; // Make sure to install react-icons

// const Terminal: React.FC = () => {
//     const [command, setCommand] = useState('');
//     const [output, setOutput] = useState<string[]>([]);
//     const [isDragging, setIsDragging] = useState(false);
//     const [offset, setOffset] = useState({ x: 0, y: 0 });
//     const [isFullScreen, setIsFullScreen] = useState(false);
//     const [isMinimized, setIsMinimized] = useState(false);
//     const terminalRef = useRef<HTMLDivElement | null>(null);

//     const handleMouseDown = (e: React.MouseEvent) => {
//         setIsDragging(true);
//         setOffset({
//             x: e.clientX - (terminalRef.current?.getBoundingClientRect().left || 0),
//             y: e.clientY - (terminalRef.current?.getBoundingClientRect().top || 0),
//         });
//     };

//     const handleMouseUp = () => {
//         setIsDragging(false);
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//         if (isDragging && terminalRef.current) {
//             const newLeft = e.clientX - offset.x;
//             const newTop = e.clientY - offset.y;

//             // Check if the terminal is dragged near the top of the screen
//             if (newTop <= 0) {
//                 setIsFullScreen(true);
//             } else {
//                 setIsFullScreen(false);
//                 terminalRef.current.style.left = `${newLeft}px`;
//                 terminalRef.current.style.top = `${newTop}px`;
//             }
//         }
//     };

//     const handleCommandSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (command) {
//             setOutput((prev) => [...prev, `$ ${command}`, 'Command executed successfully!']);
//             setCommand('');
//         }
//     };

//     const handleClose = () => {
//         terminalRef.current!.style.display = 'none'; // Hide the terminal
//     };

//     const handleMinimize = () => {
//         setIsMinimized((prev) => !prev); // Toggle minimized state
//     };

//     const handleExpand = () => {
//         setIsFullScreen(false); // Reset full screen
//         terminalRef.current!.style.left = '50px'; // Reset position
//         terminalRef.current!.style.top = '50px'; // Reset position
//     };

//     useEffect(() => {
//         window.addEventListener('mouseup', handleMouseUp);
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => {
//             window.removeEventListener('mouseup', handleMouseUp);
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, [isDragging]);

//     return (
//         <div
//             ref={terminalRef}
//             className={`bg-gray-900 text-green-400 p-4 rounded-md shadow-md ${isFullScreen ? 'absolute left-0 top-0 w-full h-full z-50' : 'h-96 w-96 absolute'
//                 }`}
//             style={{ left: isFullScreen ? 0 : '50px', top: isFullScreen ? 0 : '50px' }}
//             onMouseDown={handleMouseDown}
//         >
//             {/* Window Header with Controls */}
//             <div className="flex justify-between items-center p-2 border-b border-gray-700">
//                 <span className="font-bold">Terminal</span>
//                 <div className="flex space-x-2">
//                     <button onClick={handleMinimize} className="text-yellow-400 hover:bg-gray-800 p-1 rounded">
//                         <IoArrowDownCircle />
//                     </button>
//                     <button onClick={handleExpand} className="text-blue-400 hover:bg-gray-800 p-1 rounded">
//                         <IoArrowUpCircle />
//                     </button>
//                     <button onClick={handleClose} className="text-red-400 hover:bg-gray-800 p-1 rounded">
//                         <IoClose />
//                     </button>
//                 </div>
//             </div>

//             {!isMinimized && (
//                 <div className="flex flex-col">
//                     {output.map((line, index) => (
//                         <pre key={index} className="text-sm">{line}</pre>
//                     ))}
//                     <form onSubmit={handleCommandSubmit} className="flex">
//                         <span className="font-bold">$</span>
//                         <input
//                             type="text"
//                             value={command}
//                             onChange={(e) => setCommand(e.target.value)}
//                             className="bg-transparent border-none flex-1 text-green-400 ml-2 outline-none"
//                             placeholder="Type a command..."
//                         />
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Terminal;


// components/Terminal.tsx

// import { useState, useRef } from "react";
// import { IoClose, IoExpand, IoSquareOutline } from "react-icons/io5";

// interface TerminalProps {
//     onClose: () => void;
// }

// const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
//     const [isMaximized, setIsMaximized] = useState(false);
//     const terminalRef = useRef<HTMLDivElement | null>(null);
//     const [position, setPosition] = useState({ x: 100, y: 100 });

//     const handleDragStart = (e: React.MouseEvent) => {
//         const initialX = e.clientX - position.x;
//         const initialY = e.clientY - position.y;

//         const handleDrag = (e: MouseEvent) => {
//             setPosition({ x: e.clientX - initialX, y: e.clientY - initialY });
//         };

//         const handleDragEnd = () => {
//             window.removeEventListener("mousemove", handleDrag);
//             window.removeEventListener("mouseup", handleDragEnd);
//         };

//         window.addEventListener("mousemove", handleDrag);
//         window.addEventListener("mouseup", handleDragEnd);
//     };

//     const handleMaximize = () => {
//         setIsMaximized(!isMaximized);
//     };

//     return (
//         <div
//             ref={terminalRef}
//             className={`fixed transition-all bg-black text-white w-96 h-96 border border-gray-800 ${isMaximized ? "top-0 left-0 w-full h-full" : ""
//                 }`}
//             style={{
//                 left: `${position.x}px`,
//                 top: `${position.y}px`,
//             }}
//         >
//             <div
//                 className="flex justify-between p-2 cursor-move"
//                 onMouseDown={handleDragStart}
//             >
//                 <div>Ubuntu Terminal</div>
//                 <div className="flex space-x-2">
//                     <button
//                         className="p-1"
//                         onClick={handleMaximize}
//                     >
//                         <IoExpand />
//                     </button>
//                     <button className="p-1" onClick={onClose}>
//                         <IoClose />
//                     </button>
//                     <button className="p-1">
//                         <IoSquareOutline />
//                     </button>
//                 </div>
//             </div>
//             <div className="p-4 overflow-auto">
//                 {/* Terminal content goes here */}
//                 <p>Welcome to the Ubuntu terminal!</p>
//             </div>
//         </div>
//     );
// };

// export default Terminal;


// components/Terminal.tsx

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
            setCommand(""); // Clear command input after execution
        }
    };

    const executeCommand = (cmd: string) => {
        let response = "";

        // Simulate some basic commands
        switch (cmd.trim().toLowerCase()) {
            case "help":
                response = "Available commands: help, clear, hello";
                break;
            case "hello":
                response = "Hello, User!";
                break;
            case "clear":
                setOutput([]); // Clear output
                return;
            default:
                response = `Command not found: ${cmd}`;
        }

        // Update output
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
