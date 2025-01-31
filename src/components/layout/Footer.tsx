"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  console.log(pathname);

  if (pathname === "/signin" || pathname === "/signup") {
    return null;
  }
  return <div>Footer</div>;
}
