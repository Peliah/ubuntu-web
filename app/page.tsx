"use client";

import FileExplorer from "@/components/file-explorer";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Terminal from "@/components/terminal";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { background } from "@/components/utils";
import { useState } from "react";


export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [showFolder, setShowFolder] = useState(false);
  const [shrinkMain, setShrinkMain] = useState(false);

  const handleTerminalOpen = () => {
    setShowTerminal(true);
  };

  const handleTerminalClose = () => {
    setShowTerminal(false);
  };

  const handleFolderOpen = () => {
    setShowFolder(true);
  };

  const handleFolderClose = () => {
    setShowFolder(false);
  };

  const handleShrinkMainToggle = () => {
    setShrinkMain((prev) => !prev);
  };
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar onShrinkMain={handleShrinkMainToggle} />

      <div className="flex flex-col min-h-screen w-full bg-zinc-900">
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <main
              className={`flex-grow flex flex-col w-full justify-center items-center text-white bg-cover bg-center bg-no-repeat transition-transform duration-300 ${shrinkMain ? "transform scale-75 rounded-2xl" : ""}`}
              style={{ backgroundImage: `url(${background})` }}
            >
            </main>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem inset>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset disabled>
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset>
              Reload
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  Save Page As...
                  <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>
              Show Bookmarks Bar
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
          </ContextMenuContent>
        </ContextMenu>




      </div>

      <Footer onTerminalClick={handleTerminalOpen} onFolderClick={handleFolderOpen} />
      {showTerminal && <Terminal onClose={handleTerminalClose} />}
      {showFolder && <FileExplorer onClose={handleFolderClose} />}
    </div>
  );
}
