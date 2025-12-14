"use client";
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
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-20 fixed  transition-colors duration-300 ${
        isScrolled ? "bg-background shadow-sm" : "bg-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-6 px-6 lg:px-24">
        <a
          href="/"
          className={`text-xl font-semibold transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-background"
          }`}
        >
          BikinOnline
        </a>
        <div className="nav-item hidden lg:flex ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`bg-transparent hover:bg-transparent transition-colors duration-300 ${
                    isScrolled ? "text-foreground" : "text-background"
                  }`}
                >
                  Beranda
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Klien</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`transition-colors duration-300 ${
                    isScrolled ? "text-foreground" : "text-background"
                  }`}
                >
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
        <Menu
          className={`lg:hidden flex transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-background"
          }`}
          size={18}
          strokeWidth={2}
        />
      </div>
    </nav>
  );
}
