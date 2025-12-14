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
export default function Navbar() {
  return (
    <nav className="w-full bg-background z-20 fixed shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-6 px-24">
        <a href="/" className="text-xl">
          BikinOnline
        </a>
        <div className="nav-item">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Beranda</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Klien</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/docs">Docs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="cta flex items-center gap-4">
          <ModeToggle />
          <Button variant="default">Hubungi Kami</Button>
        </div>
      </div>
    </nav>
  );
}
