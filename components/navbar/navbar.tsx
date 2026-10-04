"use client";

import classes from "./navbar.module.css";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Resume", href: "/resume" },
  { title: "Projects", href: "/github_projects" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={classes.navbar}>
      <div className={classes["navbar-container"]}>
        <ul className={classes["nav-links"]}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <a href={link.href} className={isActive ? classes.active : ""}>
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
