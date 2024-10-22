import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/wallpaper1.jpg')" }}>

      {/* this is the notification bar that will be fully functional in a minute */}
      <header className="absolute top-0 w-full bg-zinc-950">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Logo</h1>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-blue-500">Features</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* This is the main section where most of my activities will take place */}
      <div className="flex flex-col min-h-screen w-full ">
        {/* Main content grows to fill the remaining space */}

        <ContextMenu>
          <ContextMenuTrigger asChild>
            <main className="flex-grow flex flex-col w-full justify-center items-center text-white ">
            </main>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Team</ContextMenuItem>
            <ContextMenuItem>Subscription</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>




        {/* Footer  */}
        <div className="group">
          {/* Visible hover area that slides up when near the bottom*/}
          <div className="fixed bottom-0 left-0 right-0 h-[.5px] bg-transparent group-hover:bg-transparent z-50"></div>

          <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-40">
            © 2024 Your Company. All rights reserved.
          </footer>
        </div>
      </div>

    </div>
  );
}
