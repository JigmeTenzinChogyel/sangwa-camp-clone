import Image from "next/image";
import Logo from "@/public/sangwa-camp-logo.avif";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="w-full fixed bg-slate-950 bg-opacity-35 z-10">
      <nav className="w-4/5 flex justify-center items-center">
        <div className="w-3/5 flex justify-between items-center">
          <Link href="#">
            <Image src={Logo} alt="logo" />
          </Link>
          <ul className="flex justify-center items-center gap-6 text-xs">
            <li>
              <Link href="/#about">ABOUT</Link>
            </li>
            <li>
              <Link href="/#video">VIDEO</Link>
            </li>
            <li>
              <Link href="/#community">COMMUNITY</Link>
            </li>
            <li>
              <Link href="/#contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

Header.displayName = "Header";
