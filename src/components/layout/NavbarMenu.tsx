'use client'
import { usePathname } from "next/navigation";
import React from "react";

export default function NavbarMenu() {
  const pathname = usePathname();
    if (pathname === "/signin" || pathname === "/signup") {
      return null;
    }
  return <nav>NavbarMenu</nav>;
}
