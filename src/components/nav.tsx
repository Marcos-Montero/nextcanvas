"use client";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";

export const Nav = () => {
  return (
    <NavigationMenu className="p-4">
      <NavigationMenuList className=" flex gap-8 flex-row">
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="./">Home</Link>
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="./canvas">Canvas</Link>
          </NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
