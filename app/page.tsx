"use client";

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
import { useState } from "react";


export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false);

  const handleTerminalOpen = () => {
    setShowTerminal(true);
  };

  const handleTerminalClose = () => {
    setShowTerminal(false);
  };
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />

      {/* This is the main section where most of my activities will take place */}
      <div className="flex flex-col min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/wallpaper1.jpg')" }}>
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <main className="flex-grow flex flex-col w-full justify-center items-center text-white ">
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

      <Footer onTerminalClick={handleTerminalOpen} />
      {/* Render the Terminal component conditionally */}
      {showTerminal && <Terminal onClose={handleTerminalClose} />}
    </div>
  );
}
