import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import Link from "next/link";
import { Menu } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="w-full bg-transparent z-20 fixed shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-6 px-6 lg:px-24">
        <a href="/" className="text-xl font-semibold text-background">
          BikinOnline
        </a>
        <div className="nav-item hidden lg:flex ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-background">
                  Beranda
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Klien</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="text-background">
                  <Link href="/docs">Docs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="cta hidden lg:flex items-center gap-4">
          <ModeToggle />
          <Button variant="default">Hubungi Kami</Button>
        </div>
        <Menu className="lg:hidden flex" size={18} strokeWidth={2} />
      </div>
    </nav>
  );
}
