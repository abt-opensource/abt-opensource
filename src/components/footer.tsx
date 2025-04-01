import { Copyright, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="xl:py-10">
        <div className="w-full p-4">
          <div className="mx-auto flex flex-col gap-10 md:gap-20 xl:w-[80%] ">
            <div className="flex items-center justify-center gap-5 md:gap-10">
              <Image
                src={"/favicon.png"}
                alt={"logo"}
                width={60}
                height={60}
                className="mr-5 rounded-2xl "
              />
              <div className="font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-7xl">ABT | OPEN SOURCE</div>
            </div>
            <div className="grid w-full grid-cols-2 gap-10 font-geist-mono md:gap-auto">
              <div className="flex flex-col gap-4">
                <div className="font-semibold">Products</div>
                <ul className="flex flex-col gap-2 text-sm *:text-neutral-500 *:hover:text-primary">
                  <li>Flutercon</li>
                  <li>Fluter Essentials</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-semibold">Company</div>
                <ul className="flex flex-col gap-2 text-sm *:text-neutral-500 *:hover:text-primary">
                  <li>About us</li>
                  <li>Why us</li>
                  <li>Team</li>
                  <li>Careers</li>
                  <li>Partners & Certifications</li>
                  <li>Reviews & Awards</li>
                  <li>Our Works</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-neutral-700 border-t">
        <div className="flex items-center justify-between px-8 py-4">
          <div>
            <Link href={"https://androtechbuddy.com/"} className="flex items-center gap-1 text-sm hover:text-primary">
              androtechbuddy.com
              <Copyright size={12} /> 2024
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Github />
            <Linkedin />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
