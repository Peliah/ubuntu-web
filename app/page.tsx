import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"


export default function Home() {
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
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Team</ContextMenuItem>
            <ContextMenuItem>Subscription</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>




      </div>

      <Footer />
    </div>
  );
}
