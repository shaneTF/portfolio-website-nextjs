import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href} className={isActive ? "active" : ""}>
              <a href={link.href}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
