"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import { cn } from "../lib/utils"; // agar Navbar app/components/ui me hai

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Services">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/web-dev">All Courses</HoveredLink>
          <HoveredLink href="/web-app">Basic Music Theroy</HoveredLink>
          <HoveredLink href="/web-dev">Advanced Compostion</HoveredLink>
          <HoveredLink href="/web-app">Song Writing</HoveredLink>
          <HoveredLink href="/web-app">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
        <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem></Link>
      </Menu>
   </div>
  );
}

export default Navbar;
