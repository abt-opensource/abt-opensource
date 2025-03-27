import { Button } from "@/primitives/button";
import {
  AlignJustify,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 flex h-16 w-full items-center border-neutral-600 border-b bg-opacity-50 px-4 backdrop-blur-sm">
      <div>
        <Image
          src={"/favicon.png"}
          alt={"logo"}
          width={40}
          height={40}
          className="mr-5 rounded-2xl"
        />
      </div>
      <div className="font-semibold">ABT | OPEN SOURCE</div>
      <div className="ml-auto flex items-center gap-2 md:gap-4">
        <div className="hover:bg-accent md:hidden ">
          <AlignJustify />
        </div>
        <Link
          href={"/"}
          className="hidden rounded-md bg-transparent px-4 py-2 text-foreground hover:bg-accent md:block"
        >
          <Github />
        </Link>
        <Link
          href={"/"}
          className="hidden rounded-md bg-transparent px-4 py-2 text-foreground hover:bg-accent md:block"
        >
          <Linkedin />
        </Link>
        <Link
          href={"/"}
          className="hidden rounded-md bg-transparent px-4 py-2 text-foreground hover:bg-accent md:block"
        >
          <Twitter />
        </Link>
        <Link
          href={"/"}
          className="hidden rounded-md bg-transparent px-4 py-2 text-foreground hover:bg-accent md:block"
        >
          <Instagram />
        </Link>
        <Link href={"/"}>
          <Button variant={"secondary"} className="hidden md:block">
            About us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
