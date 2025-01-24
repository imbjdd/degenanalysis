'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks =  [
  { href: "/", label: "Home" },
  { href: "/opendata", label: "Open Data" }
];

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <div className="flex gap-5 items-center">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? "font-bold" : ""}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;