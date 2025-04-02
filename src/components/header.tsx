import { Button } from "@/primitives/button";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 flex h-16 w-full items-center bg-opacity-50 px-4 text-white backdrop-blur-sm">
      <Link href={"/"} className="flex items-center">
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
      </Link>
      <div className="ml-auto flex items-center gap-2 md:gap-4">
        <Link href={"https://github.com/abt-opensource"}>
          <Button className="max-sm:hidden">
            <Github /> Explore
          </Button>
        </Link>
        <Link href={"/about-us"}>
          <Button variant={"secondary"} className="max-md:hidden">
            About us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
